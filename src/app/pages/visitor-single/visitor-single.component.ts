import { Component, inject } from '@angular/core';
import { Visitor } from '../../../interfaces/visitor.interface';
import { ActivatedRoute } from '@angular/router';
import { VisitorService } from '../../../services/visitor.service';
import { DetailComponent } from '../../components/detail/detail.component';

@Component({
  selector: 'app-visitor-single',
  standalone: true,
  imports: [DetailComponent],
  templateUrl: './visitor-single.component.html',
  styleUrl: './visitor-single.component.css'
})
export class VisitorSingleComponent {
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
