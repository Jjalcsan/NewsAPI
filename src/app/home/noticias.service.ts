import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Welcome, Article, Source } from './noticia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  realizarBusqueda(busqueda: string): Observable<Welcome>{

    return this.http.get<Welcome>(`https://newsapi.org/v2/top-headlines/sources?category=${busqueda}&apiKey=b1feeb3df9634ad99d279a47ba3a9382`);
  
  }

  realizarBusquedaInicial(): Observable<Welcome>{

    return this.http.get<Welcome>(`https://newsapi.org/v2/top-headlines/sources?apiKey=b1feeb3df9634ad99d279a47ba3a9382`);
  
  }
}
