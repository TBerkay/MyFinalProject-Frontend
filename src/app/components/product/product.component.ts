import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  //products =[{id:1,ad:"a"},{id:2,ad:"b"},{id:3,ad:"c"},{id:4,ad:"d"}];

  products: Product[] = [];
  // productResponseModel: ProductResponseModel = {
  //   data: this.products,
  //   message: "",
  //   success: true
  // };

  dataLoaded=false;

  // const ta tanımlanmış değişkene başka yerde this ile erişebiliriz
  // private yaparsan sadece class içi geçerli olur 
  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute) { } //productservice nesnesi üretme

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"]);
      }
      else{
        this.getProducts();
      }
    })
  }


  getProducts(){
    this.productService.getProducts().subscribe((response)=>{
      this.products=response.data;
      this.dataLoaded = true;
    })
  }

  getProductsByCategory(categoryId:number){
    this.productService.getProductsByCategory(categoryId).subscribe((response)=>{
      this.products=response.data;
      this.dataLoaded = true;
    })
  }

}


// getProducts() {
//   // this ile aslında class ı belirtiyoruz, parametreler hariç
//   // gelen datayı ProductResponseModel şeklinde map le
//   // subscribe veri çekildikten sonra response oluyo ve ...
//   this.HttpClient.get<ProductResponseModel>(this.apiUrl).subscribe((response) => {
//     //this.productResponseModel = response;
//     this.products = response.data;
//   });
// }