import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ReceptService } from '../../../services/recept.service';
import { Recept } from '../../../interfaces/recept.interface';
import { DataKeys } from '../../types';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-recepts',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './recepts.component.html',
  styleUrl: './recepts.component.css'
})
export class ReceptsComponent {
  router = inject(Router)
  receptService = inject(ReceptService)
  recepts: Recept[] = []

  ngOnInit(){
    this.receptService.getRecepts().subscribe((data)=>{
      this.recepts = data;
    });
  }

  displayedColumns: DataKeys[] = [
    {
      label: "Name",
      key: 'name'   
    },
    {
      label: "Description",
      key: 'description'   
    },
    {
      label: "Date",
      key: 'dateTime'   
    },
    {
      label: "Status",
      key: 'status'   
    }
  ];
}
