import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8888/students';

  constructor(private http: HttpClient) { }

  getStudentsList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getStudent(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}` + `/${id}`);
  }

  getStudentsByName(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/findByName/${name}`);
  }

  createStudent(student: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/`, student);
  }

  updateStudent(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}` + `/${id}`, value);
  }

  deleteStudent(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}`+ `/${id}`, {
      responseType: 'text'
    });
  }

  deleteAll(): Observable<any>{
    return this.http.delete(`${this.baseUrl}` + `/deleteAll`, {
      responseType: 'text'
    });
  }

}
