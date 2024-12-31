import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/arkham-api.service';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  card: Card | undefined;
  isExpanded: boolean = false;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const cardCode = this.route.snapshot.paramMap.get('code');
    if (cardCode) {
      this.apiService.getCardDetail(cardCode).subscribe({
        next: (data) => {
          this.card = { ...data, imagesrc: `https://arkhamdb.com${data.imagesrc}` };
        },
        error: (err) => {
          console.error('Error al obtener la carta', err);
        }
      });
    }
  }

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }

  goBack(): void {
    this.router.navigate(['/']);  // Redirige al home
  }
}
