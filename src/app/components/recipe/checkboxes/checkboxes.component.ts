import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.css']
})
export class CheckboxesComponent implements OnInit {
  @Input() quantity: string;
  @Input() item: string;
  @Input() isChecked: boolean;

  @Output() updateCheckboxes = new EventEmitter;


  constructor() { }

  ngOnInit() {
  }

  checkboxChanged() {
    this.isChecked = !this.isChecked;

    this.updateCheckboxes.emit({ item: this.item, checked: this.isChecked });
  }
}
