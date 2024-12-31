import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/arkham-api.service';
import { Card } from '../../models/card.model';
import { PageEvent } from '@angular/material/paginator';
import { fadeInOut } from '../../animations';  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInOut]  
})
export class HomeComponent implements OnInit {
  cards: Card[] = [];
  paginatedCards: Card[] = [];
  loading: boolean = true;
  isCardView: boolean = true;
  pageSize: number = 10;
  pageIndex: number = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    setTimeout(() => {  // Retraso de 2 segundos para poder apreciar bien el spinner (en una versión "real" de la aplicación no añadiríamos este retraso). 

      this.apiService.getCards().subscribe({
        next: (data: Card[]) => {
          this.cards = data;
          this.updatePagination();
          this.loading = false; 
        },
        error: (err) => {
          console.error('Error al obtener las cartas:', err);
          this.loading = false;
        }
      });
    }, 2000); 
    }

  updatePagination(): void {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedCards = this.cards.slice(start, end);
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.updatePagination();
  }

  toggleView(): void {
    this.isCardView = !this.isCardView;
  }
}
