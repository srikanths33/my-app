import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {

  name:string="";
  price:number=0;
  rating:number=0;
  freedelivary:boolean=true;

  term:string="";


  products:any=[

    {productname:'pen',price:20,rating:4,freedelivary:'true'},
    {productname:'phone',price:18000,rating:4.5,freedelivary:'false'},
    {productname:'laptop',price:45000,rating:3,freedelivary:'true'},
    {productname:'shirt',price:2500,rating:2.5,freedelivary:'true'},
    {productname:'book',price:100,rating:4.2,freedelivary:'false'},
    {productname:'charger',price:1500,rating:3.4,freedelivary:'false'},
    {productname:'mobilecase',price:800,rating:3.9,freedelivary:'true'},

  ];


  delete(i:number){
    this.products.splice(i,1)
  }

  pricehigh(){
    this.products.sort((a:any,b:any)=>b.price-a.price)

  }
  pricelow(){
    this.products.sort((a:any,b:any)=>a.price-b.price)
  }
  ratingh(){
    this.products.sort((a:any,b:any)=>b.rating-a.rating)
  }
  ratingl(){
    this.products.sort((a:any,b:any)=>a.rating-b.rating)
  }
  discount(){
    this.products=this.products.map((product:any)=>{
      product.price=product.price*0.5;
      return product;
    })
  }
    delivery(){
      this.products=this.products.map((product:any)=>{
      product.price=product.price+60;
      return product;
    })
  }
  total(){
    let totalcost=this.products.reduce((sum:any,product:any)=>sum+product.price,0);
    alert(totalcost);
  }
  cart(){
    let cart=this.products.length;
    alert(cart)
  }

  add(){
    let product={
      productname:this.name,
      price:this.price,
      rating:this.rating,
      freedelivary:this.freedelivary
    }
    this.products.unshift(product);
  }
  search(){
   this.products= this.products.filter((product:any)=>product.productname.includes(this.term));
  }
  free(){
    this.products=this.products.filter((product:any)=>product.freedelivary=="true")
  }


}

