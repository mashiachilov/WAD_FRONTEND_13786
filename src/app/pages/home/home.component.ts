import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  studentId: number = 13786;
  result: number = 689;
  remainder: number = 6;
  
  calculateResult() {
    this.result = Math.floor(this.studentId / 20);
    this.remainder = this.studentId % 20;
  }
}
