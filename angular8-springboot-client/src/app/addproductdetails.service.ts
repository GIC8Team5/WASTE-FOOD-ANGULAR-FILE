import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class AddproductdetailsService {
  private baseUrlCreate = 'http://localhost:8686/springboot-crud-rest/api/v1/donor';
  private baseUrlGet = 'http://localhost:8686/springboot-crud-rest/api/v1/donor';
  private baseUrlAllGet = 'http://localhost:8686/springboot-crud-rest/api/v1/donorDetails';
  private baseUrlUpdate = 'http://localhost:8686/springboot-crud-rest/api/v1/donor';
  private baseUrlDelete = 'http://localhost:8686/springboot-crud-rest/api/v1/donor';

  constructor(private httpClient: HttpClient) { }

  addProductDetails(product: Product): Observable<object> {
    return this.httpClient.post(`${this.baseUrlCreate}`, product);

  }
  getPostDetails(emailId: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrlGet}/${emailId}`);
  }
  getAllPostDetails(): Observable<any> {
    return this.httpClient.get(`${this.baseUrlAllGet}`);
  }
  updatePostStatus(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrlUpdate}/${id}`, value);
  }

  deletePostDetails(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrlDelete}/${id}`, { responseType: 'text' });
  }

}
