import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategoriesResponse, brandsResponse, historyResponse, promotionsResponse, storesResponse } from '../constants/responses.constants';

const CATEGORIES_PATH = "getSubsubcategorias";
const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  )
};

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {
  private http = inject(HttpClient);
  apiUrl: string = environment.apiUrl;

  constructor() { }

  getCategories() {
    //return this.http.get(`${this.apiUrl}/${CATEGORIES_PATH}`, httpOptions).toPromise();
    return CategoriesResponse;
  }

  getOffers() {
    return promotionsResponse;
  }

  getLatestProducts() {
    return historyResponse;
  }

  getStores() {
    return storesResponse;
  }

  getBrands() {
    return brandsResponse;
  }
}
