import { Component, OnChanges, DoCheck, AfterViewInit } from '@angular/core';
import { IpfsService } from '../../services/ipfs.service';

@Component({
  selector: 'app-show-all-products',
  templateUrl: './show-all-products.component.html',
  styleUrls: ['./show-all-products.component.css']
})
export class ShowAllProductsComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    console.log('work');
  }

}
