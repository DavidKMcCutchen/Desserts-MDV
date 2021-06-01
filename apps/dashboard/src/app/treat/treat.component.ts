import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { emptyTreat, Treat } from '@dessert/api-interfaces';
import { TreatFacade } from '@dessert/core-state';
import { Observable } from 'rxjs';


@Component({
  selector: 'dessert-treat',
  templateUrl: './treat.component.html',
  styleUrls: ['./treat.component.scss']
})
export class TreatComponent implements OnInit {
  allTreats$: Observable<Treat[]> = this.treatFacade.allTreats$;
  selectedTreat$: Observable<Treat> = this.treatFacade.selectedTreats$;

  form: FormGroup;

  constructor(
    private treatFacade: TreatFacade,
    private formBuilder: FormBuilder
  ) {
    this.treatFacade.mutations$.subscribe((_) => this.resetTreat());
  }

  ngOnInit() {
    this.initForm();
    this.treatFacade.loadTreats();
    this.resetTreat()
  }

  selectTreat(treat: Treat) {
    this.form.patchValue(treat);
    this.treatFacade.selectTreat(treat.id)
  }

  saveTreat(treat: Treat) {
    this.treatFacade.saveTreat(treat);
  }

  deleteTreat(treat: Treat) {
    this.treatFacade.deleteTreat(treat);
  }

  resetTreat() {
    this.form.reset();
    this.selectTreat(emptyTreat)
  }

  cancel() {
    this.resetTreat();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: [''],
      description: [''],
    })
  }
}
