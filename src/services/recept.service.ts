import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Recept, ReceptCreate } from '../interfaces/recept.interface';

const BASE_URL = 'https://localhost:7042/api'
@Injectable({
  providedIn: 'root'
})
export class ReceptService {
  httpClient = inject(HttpClient);

  getRecepts(): Observable<Recept[]> {
    return this.httpClient.get<Recept[]>(`${BASE_URL}/Recepts`)
  };

  getRecept(id: number): Observable<Recept>{
    return this.httpClient.get<Recept>(`${BASE_URL}/Recepts/${id}`);
  };

  updateRecept(id: number, recept: ReceptCreate){
    return this.httpClient.put(`${BASE_URL}/Recepts/${id}`, recept);  
  };

  deleteRecept(id:number){
    return this.httpClient.delete(`${BASE_URL}/Recepts/${id}`);
  };
  
  createRecept(recept: ReceptCreate): Observable<Recept>{
    return this.httpClient.post<Recept>(`${BASE_URL}/Recepts`, recept);
  };
}