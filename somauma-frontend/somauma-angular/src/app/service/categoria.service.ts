import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  getAllCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>('http://localhost:9000/categorias')
  }  

  getByIdCategoria(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`http://localhost:9000/categorias/${id}`)
  }
  
  postCategoria(categoria: Categoria) : Observable<Categoria>  {
    return this.http.post<Categoria>('http://localhost:9000/categorias', categoria)
  }

  putCategoria(categoria: Categoria) : Observable<Categoria> {
    return this.http.put<Categoria>('http://localhost:9000/categorias', categoria)
  }

  deleteCategoria(id: number){
    return this.http.delete(`http://localhost:9000/categorias/${id}`)
  }

}
