import { Component, Input, inject } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Visitor, VisitorCreate } from '../../../interfaces/visitor.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { VisitorService } from '../../../services/visitor.service';
import { ReceptService } from '../../../services/recept.service';
import { Recept } from '../../../interfaces/recept.interface';

@Component({
  selector: 'app-visitor-add-edit',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatDatepickerModule],
  templateUrl: './visitor-add-edit.component.html',
  styleUrl: './visitor-add-edit.component.css',
  providers: [provideNativeDateAdapter()],
})
export class VisitorAddEditComponent {
  @Input()
  visitorDetail!: Visitor;

  @Input()
  isEdit: boolean = false

  router = inject(Router)
  visitorService = inject(VisitorService)
  receptService = inject(ReceptService)
  activatedRoute = inject(ActivatedRoute)

  createVisitor: VisitorCreate = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    arrivalDate: '',
    notes: null,
    receptId: null
  }
  errorObj: any;
  recepts: Recept[] = [];
  receptId: number | null = null;


  ngOnInit() {
    this.receptService.getRecepts().subscribe((data) => {
      this.recepts = data
    });
  }

  ngOnChanges() {
    this.createVisitor = this.visitorDetail;
    this.receptId = this.createVisitor.receptId
  }

  clearForm() {
    this.createVisitor = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      arrivalDate: '',
      notes: null,
      receptId: null
    }
  }

  submitForm() {
    this.createVisitor.receptId=this.receptId;
    this.createVisitor.phoneNumber = String(this.createVisitor.phoneNumber)
    console.log("aaa", this.createVisitor)
    if(this.isEdit) {
      this.visitorService.updateVisitor(this.activatedRoute.snapshot.params["id"], this.createVisitor).subscribe(_=>{
        alert("Visitor Updated")
        this.router.navigateByUrl("visitor");
      },
      error => {
        this.errorObj = error.error.errors;
      })
    }else{
      this.visitorService.createVisitor(this.createVisitor).subscribe(_=> {
        alert("Visitor created")
        this.router.navigateByUrl("visitor")
      },
      error => {
        this.errorObj = error.error.errors;
      });
    }
  }
}
