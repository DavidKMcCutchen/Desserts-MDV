import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Treat } from '@dessert/api-interfaces';



@Component({
  selector: 'dessert-treat-details',
  templateUrl: './treat-details.component.html',
  styleUrls: ['./treat-details.component.scss']
})
export class TreatDetailsComponent{
  currentTreat: Treat;
  originalTitle: string;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set treat(value) {
    if (value) this.originalTitle = value.name;
    this.currentTreat = {...value}
  }

  @Input() form: FormGroup;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  }

  cancel() {
    this.cancelled.emit();
  }

}
