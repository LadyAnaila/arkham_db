import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  
})
export class ApiService {
  private apiUrl = '/api/public';  // Asegúrate de que esta URL es la correcta para la API.

  constructor(private http: HttpClient) { }

  // Método para obtener todas las cartas
  getCards(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/cards`);
  }

  // Método para obtener los detalles de una carta por su código
  getCardDetail(cardCode: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/card/${cardCode}`);
  }
}
