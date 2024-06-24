import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

const SEARCH_PATH = "searchAutoparteV3/?search=jetta%202023&limit=20&page=1&categoriaSeleccionada=undefined&marcasSeleccionadas=&vehiculo=";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private http = inject(HttpClient);
  apiUrl: string = environment.apiUrl;
  results = signal([]);

  constructor() { }

  async searchByText() {
   try {
    const response: any = await this.http.get(`${this.apiUrl}/${SEARCH_PATH}`).toPromise();
    if(!response) return;
    if(!response.results) return;
    this.results.set(response.results);
   } catch (error) {

   }
  }

  getResults() {
    return this.results;
  }
}
