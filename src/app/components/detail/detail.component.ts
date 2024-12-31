import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/arkham-api.service';  // Cambia la ruta si es necesario
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  card: Card | undefined;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Capturamos el cardCode desde la URL
    const cardCode = this.route.snapshot.paramMap.get('cardCode');

    if (cardCode) {
      // Llamamos al servicio para obtener los detalles de la carta
      this.apiService.getCardDetail(cardCode).subscribe({
        next: (data) => {
          // Asignamos la carta recibida al componente
          this.card = data;
        },
        error: (err) => {
          console.error('Error al obtener la carta', err);
        }
      });
    }
  }
}
