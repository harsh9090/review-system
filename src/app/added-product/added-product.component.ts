import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { IpfsService } from '../../services/ipfs.service';

@Component({
  selector: 'app-added-product',
  templateUrl: './added-product.component.html',
  styleUrls: ['./added-product.component.css']
})
export class AddedProductComponent implements OnInit {

  constructor(private route:ActivatedRoute,private ipfs:IpfsService) { }
  data=null;
  load=true;
  ngOnInit(): void {
   this.route.queryParams.subscribe(data=>{
     this.data = this.ipfs.GetData(data.hash).then(data=>{
       this.load=false;
       this.data = data
     })

   })
}
}
