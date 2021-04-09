import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  apiUrl = "https://localhost:44396/api/";

  constructor(private HttpClient: HttpClient) { } // httpclient nesnesi üretme

  getProducts():Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl+"products/getall";
    // this ile aslında class ı belirtiyoruz, parametreler hariç
    // gelen datayı ProductResponseModel şeklinde map le
    // subscribe veri çekildikten sonra response oluyo ve ...
    return this.HttpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl+"products/getbycategory?categoryId="+categoryId;
    return this.HttpClient.get<ListResponseModel<Product>>(newPath);
  }


}

// this.HttpClient.get<ProductResponseModel>(this.apiUrl); // observable dır
