import { Injectable } from '@angular/core';
import * as IPFS from 'ipfs-mini' 
import { Subject } from 'rxjs';
import { EthercontractService } from './ethercontract.service';


@Injectable({
  providedIn: 'root'
})
export class IpfsService {
  constructor(private ethcontract:EthercontractService) { }
  product = new Subject<[]>();
  allProducts = [];
  result=''
  data=''
  interval;
  ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001,protocol: 'https'});
  async UploadData(values:string,title:string) {
    await this.ipfs.add(values)
      .then(async result => {
        this.result=result;
       await this.ethcontract.addDetails(result,title).then(result=>{
         console.log(result)
          this.initialProduct();
        }).catch(error=>{
          console.log(error)
        });
        return result;
      })
    return this.result;
  }
  async initialProduct(){
    await this.getProduct().then((res:[])=>{
      var time=0;
      this.interval = setInterval(() => {
        this.allProducts = res;
       this.product.next(res);
       time++;
       if(time>=3){
         clearInterval(this.interval);
       }
    }, 5000);
    })
  }
  viewProductData(number){
  return this.allProducts[number];
  }

  async getReview(prname){
    var data = []
    await this.ethcontract.getReviewFile(prname).then(file=>{
      if(file[0]==""){
        return null;
      }
      this.GetData(file[0]).then((data2)=>{
       for(let i=0;i<data2.length;i++){
         data.push(data2[i]);
       }
      });
    });
    return data;
  }

  async addReview(prname:any,values,rating:number) {
    var allData=[];
    var oneValue =[];
    oneValue.push(values);
    var stringValue = JSON.stringify(oneValue);
    await this.ethcontract.getReviewFile(prname).then(file=>{
      if(file[0]!= ""){
        this.GetData(file[0]).then(data=>{
          for(let i=0; i<data.length;i++)
          allData.push(data[i]);
          allData.push(values);
          console.log(allData)
          var stringData = JSON.stringify(allData);
          this.ipfs.add(stringData)
          .then(hash1 => {
            console.log(hash1)
            this.ipfs.add(stringValue)
          .then(hash2 => {
            this.ethcontract.addReview(prname,rating,hash1,hash2).then(result=>{
              console.log(result)
            }).catch(error=>{
              console.log(error)
            });
            
          })
        }
        )
          }).catch(e=>{
            console.log(e)
          })
        }
        else{
          console.log("new")
          this.ipfs.add(stringValue)
          .then(hash1 => {
            this.ipfs.add(stringValue)
          .then(hash2 => {
            this.ethcontract.addReview(prname,rating,hash1,hash2).then(result=>{
              console.log(result)
            }).catch(error=>{
              console.log(error)
            });
          })
        }
        )
        }
      }
      ).catch(e=>{
        console.log(e);
      });
     
    }
    



  async getProduct() {
    var product=[]
      await  this.ethcontract.getProduct().then((result:any)=>{
          for(var i=0;i<result.length;i++){
              this.GetData(result[i]).then(data=>{
               product.push(data) 
              }).catch(error=>{
                product=error;
              })
        }
        }).catch(error=>{
          console.log(error)
        });
    return product;
  }


 async GetData(hash){
   await this.ipfs.cat(hash).then(result => {
      this.data=result
      var data = JSON.parse(this.data);
      this.data = data
      return data;
    });
    return this.data;
  }
}