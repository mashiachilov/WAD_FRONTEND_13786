import { Component, Input, inject } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Recept, ReceptCreate } from '../../../interfaces/recept.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceptService } from '../../../services/recept.service';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-recept-add-edit',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatDatepickerModule, MatCheckboxModule],
  templateUrl: './recept-add-edit.component.html',
  styleUrl: './recept-add-edit.component.css',
  providers: [provideNativeDateAdapter()],
})
export class ReceptAddEditComponent {
  @Input()
  receptDetail!: Recept;

  @Input()
  isEdit: boolean = false

  router = inject(Router)
  receptService = inject(ReceptService)
  activatedRoute = inject(ActivatedRoute)

  createRecept: ReceptCreate = {
    name: '',
    description: '',
    dateTime: null,
    status: false
  }
  errorObj: any;


  ngOnChanges() {
    this.createRecept = this.receptDetail;
  }

  clearForm() {
    this.createRecept = {
      name: '',
      description: '',
      dateTime: null,
      status: false
    }
  }

  submitForm() {
    if(this.isEdit) {
      this.receptService.updateRecept(this.activatedRoute.snapshot.params["id"], this.createRecept).subscribe(_=>{
        alert("Recept Updated")
        this.router.navigateByUrl("recept");
      },
      error => {
        this.errorObj = error.error.errors;
      })
    }else{
      this.receptService.createRecept(this.createRecept).subscribe(_=> {
        alert("Recept created")
        this.router.navigateByUrl("recept")
      },
      error => {
        this.errorObj = error.error.errors;
      });
    }
  }
}
