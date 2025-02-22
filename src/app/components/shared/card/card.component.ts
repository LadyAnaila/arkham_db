import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../../../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card: Card | undefined;  

  constructor(private router: Router) {}

  goToDetail(cardCode: string): void {
    this.router.navigate(['/detail', cardCode]); 
  }
}
