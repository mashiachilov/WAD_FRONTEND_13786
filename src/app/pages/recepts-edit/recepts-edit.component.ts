import { Component, inject } from '@angular/core';
import { Recept } from '../../../interfaces/recept.interface';
import { ActivatedRoute } from '@angular/router';
import { ReceptService } from '../../../services/recept.service';
import { ReceptAddEditComponent } from '../../components/recept-add-edit/recept-add-edit.component';

@Component({
  selector: 'app-recepts-edit',
  standalone: true,
  imports: [ReceptAddEditComponent],
  templateUrl: './recepts-edit.component.html',
  styleUrl: './recepts-edit.component.css'
})
export class ReceptsEditComponent {
  receptDetail: Recept = {
    id: 0,
    name: '',
    description: '',
    dateTime: null,
    status: false
  }

  activatedRoute = inject(ActivatedRoute)
  receptService = inject(ReceptService)

  ngOnInit() {
    this.receptService.getRecept(this.activatedRoute.snapshot.params["id"]).subscribe((recept)=>{
    this.receptDetail = recept;
    });
  }
}
