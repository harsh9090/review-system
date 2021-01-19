
import { AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { IpfsService } from 'services/ipfs.service';
 

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})


export class ProductsTableComponent implements AfterViewInit, OnInit {
  subscribe:Subscription=new Subscription();
  @ViewChild('paginator', { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private ipfs:IpfsService,private router:Router) { }

  dataSource = new MatTableDataSource();
  show = true;
  dataLength = 0
data = [];
  displayedColumns: string[] =
  ['productImage','title', 'category', 'shortDescription','longDescription'];
title;
getRow(number){
  this.router.navigate(['/view-product'],{queryParams:{number:number}})
}
ngOnInit(){
  this.ipfs.initialProduct()
  this.subscribe= this.ipfs.product.subscribe(dat=>{
    var res = dat
    this.dataSource = new MatTableDataSource(res);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataLength = res.length;
  })
  setTimeout(()=>{
    this.show = false;
  },5500);
  }
  ngAfterViewInit(): void { 
    this.dataSource.paginator = this.paginator; // For pagination
    this.dataSource.sort = this.sort; // For sort
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  filterCategory(event) {
    if(event !== "All")
    this.dataSource.filter = event
    else
    this.dataSource.filter = ''
  }

  
}
