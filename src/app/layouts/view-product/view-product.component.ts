import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IpfsService } from 'services/ipfs.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  product;
  constructor(private route:ActivatedRoute,private ipfs:IpfsService){}
 ngOnInit(){
   this.route.queryParams.subscribe(value=>{
        this.product=  this.ipfs.viewProductData(value.number)
        console.log(this.product)
       
   })
 }
}
