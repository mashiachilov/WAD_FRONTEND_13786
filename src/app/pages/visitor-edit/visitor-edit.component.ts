import { Component, inject } from '@angular/core';
import { VisitorAddEditComponent } from '../../components/visitor-add-edit/visitor-add-edit.component';
import { Visitor } from '../../../interfaces/visitor.interface';
import { ActivatedRoute } from '@angular/router';
import { VisitorService } from '../../../services/visitor.service';

@Component({
  selector: 'app-visitor-edit',
  standalone: true,
  imports: [VisitorAddEditComponent],
  templateUrl: './visitor-edit.component.html',
  styleUrl: './visitor-edit.component.css'
})
export class VisitorEditComponent {
  visitorDetail: Visitor = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    arrivalDate: '',
    notes: '',
    receptId: null,
    recept: null
  }

  activatedRoute = inject(ActivatedRoute)
  visitorService = inject(VisitorService)

  ngOnInit() {
    this.visitorService.getVisitor(this.activatedRoute.snapshot.params["id"]).subscribe((visitor)=>{
    this.visitorDetail = visitor;
    });
  }
}
