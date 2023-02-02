import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  constructor(
    public dialogo: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string) { }

  ngOnInit() {
  }
  
}
