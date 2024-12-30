import { Component, Input } from '@angular/core';
import { Card } from '../../../models/card.model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card: Card | undefined;  

  goToDetail(cardCode: string): void {
    console.log(`Navegando a la carta con el código: ${cardCode}`);
  }
}
