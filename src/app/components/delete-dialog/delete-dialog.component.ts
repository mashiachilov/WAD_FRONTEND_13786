import { Component, Inject, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ReceptService } from '../../../services/recept.service';
import { VisitorService } from '../../../services/visitor.service';

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.css'
})
export class DeleteDialogComponent {
  router = inject(Router)
  receptService = inject(ReceptService)
  visitorService = inject(VisitorService)
  id: number;
  tableName: string = ''
  constructor(
    private _mdr: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: { id: number, tableName: string }
  ) {
    this.id = data.id;
    this.tableName = data.tableName
  }
  cancelTask() {
    this._mdr.close(false)
  }

  refreshPage() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([this.tableName]);
    });
  }

  deleteTask() {
    if(this.tableName === 'recept') {
      this.receptService.deleteRecept(this.id).subscribe(_ => {
        this.refreshPage()
      })
    }
    if(this.tableName === 'visitor') {
      this.visitorService.deleteVisitor(this.id).subscribe(_ => {
        this.refreshPage()
      })
    }
    this._mdr.close(false)
  }
}
