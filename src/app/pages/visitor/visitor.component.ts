import { Component, inject } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { Router } from '@angular/router';
import { VisitorService } from '../../../services/visitor.service';
import { Visitor } from '../../../interfaces/visitor.interface';
import { DataKeys } from '../../types';

@Component({
  selector: 'app-visitor',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './visitor.component.html',
  styleUrl: './visitor.component.css'
})
export class VisitorComponent {
  router = inject(Router)
  visitorService = inject(VisitorService)
  visitors: Visitor[] = []

  ngOnInit(){
    this.visitorService.getVisitors().subscribe((data)=>{
      this.visitors = data;
    });
  }

  displayedColumns: DataKeys[] = [
    {
      label: "FirstName",
      key: 'firstName'   
    },
    {
      label: "LastName",
      key: 'lastName'   
    },
    {
      label: "Email",
      key: 'email'   
    },
    {
      label: "Phone Number",
      key: 'phoneNumber'   
    },
    {
      label: "Arrival Date",
      key: 'arrivalDate'   
    },
    {
      label: "Notes",
      key: 'notes'   
    },
  ];
}