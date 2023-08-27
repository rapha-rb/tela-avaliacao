import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Forms } from './forms';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  private apiUrl = 'http://localhost:3000/forms';

  constructor(private http: HttpClient) { }

  getFormData(): Observable<Forms[]> {
    return this.http.get<Forms[]>(this.apiUrl);
  }

  addFormData(data: Forms): Observable<any> {
    return this.http.post<Forms>(this.apiUrl, data);
  }

  removeFormData(data: Forms): Observable<any> {
    return this.http.delete<Forms>(this.apiUrl + "/" + data.id)
  }
}
