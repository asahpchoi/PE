import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PeService {
  private apiRoot = 'https://product-engine-nodejs.herokuapp.com/api';

  constructor(private http:HttpClient) {
  }

  getJSON() {
    return "done";
  }

  getSchema() {
    let url = this.apiRoot + '/v1/product/readSchema/RE100/01';
    return this.http.get(url);
  }

}
