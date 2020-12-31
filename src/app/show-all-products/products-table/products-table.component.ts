
import { AfterViewInit, Component, OnChanges, ViewChild, OnInit, AfterContentInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IpfsService } from '../../../services/ipfs.service';
 

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})


export class ProductsTableComponent implements AfterViewInit, OnInit {

  @ViewChild('paginator', { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private ipfs:IpfsService) { }

  dataSource = new MatTableDataSource();
  show = true;
  dataLength = 0
data = [];
  displayedColumns: string[] =
  ['productImage','title', 'category', 'shortDescription','longDescription'];
title;
ngOnInit(){
   console.log('work')
   this.ipfs.getProduct().then(res=>{
        this.data =res;
    })
    setTimeout(()=>{
      this.show = false;
    },8000)
  setTimeout(() => {
    var res = this.data
    console.log(res)
    this.dataSource = new MatTableDataSource(res);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataLength = res.length;
  }, 8000);
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
