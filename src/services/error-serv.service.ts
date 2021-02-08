import {  Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Error404Component } from 'app/error404/error404.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorServService {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(Error404Component,{
      data:{name:'there is error'}
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}