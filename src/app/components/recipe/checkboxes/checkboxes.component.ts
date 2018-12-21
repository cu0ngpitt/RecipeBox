import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredients } from '../../../ingredients';


@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.css']
})
export class CheckboxesComponent implements OnInit {
  @Input() recipe: Ingredients;
  @Input() isChecked: boolean;

  @Output() updateCheckboxes = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  checkboxChanged() {
    this.isChecked = !this.isChecked;

    this.updateCheckboxes.emit(this.isChecked);
  }
}
