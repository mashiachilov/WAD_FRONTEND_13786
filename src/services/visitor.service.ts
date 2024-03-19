import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Visitor, VisitorCreate } from '../interfaces/visitor.interface';

const BASE_URL = 'https://localhost:7042/api'
@Injectable({
  providedIn: 'root'
})
export class VisitorService {
  httpClient = inject(HttpClient);

  getVisitors(): Observable<Visitor[]> {
    return this.httpClient.get<Visitor[]>(`${BASE_URL}/Visitors`)
  };

  getVisitor(id: number): Observable<Visitor>{
    return this.httpClient.get<Visitor>(`${BASE_URL}/Visitors/${id}`);
  };

  updateVisitor(id: number, visitor: VisitorCreate){
    return this.httpClient.put(`${BASE_URL}/Visitors/${id}`, visitor);  
  };

  deleteVisitor(id:number){
    return this.httpClient.delete(`${BASE_URL}/Visitors/${id}`);
  };
  
  createVisitor(visitor: VisitorCreate): Observable<Visitor>{
    return this.httpClient.post<Visitor>(`${BASE_URL}/Visitors`, visitor);
  };
}