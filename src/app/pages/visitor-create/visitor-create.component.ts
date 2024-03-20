import { Component } from '@angular/core';
import { VisitorAddEditComponent } from '../../components/visitor-add-edit/visitor-add-edit.component';

@Component({
  selector: 'app-visitor-create',
  standalone: true,
  imports: [VisitorAddEditComponent],
  templateUrl: './visitor-create.component.html',
  styleUrl: './visitor-create.component.css'
})
export class VisitorCreateComponent {

}
