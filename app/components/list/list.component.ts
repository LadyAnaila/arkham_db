import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/arkham-api.service';
import { Card } from '../../models/card.model';  // Modelo de la carta
import { Router } from '@angular/router';  // Para navegación entre rutas

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() cards: Card[] = [];  
  loading: boolean = true;  

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getCards().subscribe({
      next: (data: Card[]) => {
        console.log(data);
        this.cards = data; 
        this.loading = false; 
      },
      error: (err) => {
        console.error('Error al obtener las cartas:', err);  
        this.loading = false;  
      }
    });
  }
  
  goToDetail(cardCode: string): void {
    this.router.navigate(['/detail', cardCode]);  
  }
}
