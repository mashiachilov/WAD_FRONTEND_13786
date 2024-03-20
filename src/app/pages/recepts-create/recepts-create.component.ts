import { Component } from '@angular/core';
import { ReceptAddEditComponent } from '../../components/recept-add-edit/recept-add-edit.component';

@Component({
  selector: 'app-recepts-create',
  standalone: true,
  imports: [ReceptAddEditComponent],
  templateUrl: './recepts-create.component.html',
  styleUrl: './recepts-create.component.css'
})
export class ReceptsCreateComponent {

}
