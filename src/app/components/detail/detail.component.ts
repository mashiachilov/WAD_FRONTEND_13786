import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  @Input()
  detail: any;

  @Input()
  title: string = ''
  
  detailIter: any;
  description: string = '';
  receptIter!: any;
  receptDesc: string = '';
  
  ngOnChanges() {
    this.detailIter = Object.entries(this.detail)
    if (this.detail && this.detail.recept) {
      this.receptIter = Object.entries(this.detail.recept);
      this.receptDesc = this.detail.recept.description
    }
  }
}
