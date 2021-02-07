import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IpfsService } from 'services/ipfs.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
product;
loading=false;
  products={title:'xyz',catogery:'xyz',shortDescription:'xyz',longDescription:'xyz',productImage:'xyz'};
  constructor(private route:ActivatedRoute,private ipfs:IpfsService,
    private router:Router){}
 ngOnInit(){
   this.route.queryParams.subscribe(value=>{
        this.product = this.ipfs.viewProductData(value.number)
        if(this.product==null){
          this.loading = true;
          
        }
   })
 }

 addReview(){
   this.router.navigate(['add-review'],{queryParams:{name:this.product.title}})
 }
}
