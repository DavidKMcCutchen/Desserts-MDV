import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Treat } from '@dessert/api-interfaces';


@Component({
  selector: 'dessert-treat-list',
  templateUrl: './treat-list.component.html',
  styleUrls: ['./treat-list.component.scss']
})
export class TreatListComponent {
  @Input() treats: Treat[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

}
