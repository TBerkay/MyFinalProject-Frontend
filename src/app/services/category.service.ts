import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  apiUrl = "https://localhost:44396/api/categories/getall";

  constructor(private HttpClient: HttpClient) { } // httpclient nesnesi üretme

  getCategories():Observable<ListResponseModel<Category>> {
    // this ile aslında class ı belirtiyoruz, parametreler hariç
    // gelen datayı CategoryResponseModel şeklinde map le
    // subscribe veri çekildikten sonra response oluyo ve ...
    return this.HttpClient.get<ListResponseModel<Category>>(this.apiUrl);
  }
}