import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  private apiUrl = 'http://localhost:8090/api/words';


  constructor(private http: HttpClient) {}

postData(data: any): Observable<string> {
  return this.http.post(`${this.apiUrl}`, data, { responseType: 'text' });
}


}
