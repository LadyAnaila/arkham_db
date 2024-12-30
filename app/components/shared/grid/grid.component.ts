import { Component, Input } from '@angular/core';
import { Card } from '../../../models/card.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  @Input() cards: Card[] = [];
  displayedColumns: string[] = ['name', 'pack_name', 'type_name', 'faction_name']; 
}
