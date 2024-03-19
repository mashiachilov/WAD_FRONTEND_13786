import { Component, inject } from '@angular/core';
import { Recept } from '../../../interfaces/recept.interface';
import { ActivatedRoute } from '@angular/router';
import { ReceptService } from '../../../services/recept.service';
import { DetailComponent } from '../../components/detail/detail.component';

@Component({
  selector: 'app-recepts-single',
  standalone: true,
  imports: [DetailComponent],
  templateUrl: './recepts-single.component.html',
  styleUrl: './recepts-single.component.css'
})
export class ReceptsSingleComponent {
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
