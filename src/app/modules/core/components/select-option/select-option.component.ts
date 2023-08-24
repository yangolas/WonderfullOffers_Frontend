import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.css']
})
export class SelectOptionComponent 
{
  @Input() selectedOption: string;
  @Input() data: string[];
  @Output() optionChange = new EventEmitter<string>();
  

  onOptionChange(selectedValue: string) {
    this.selectedOption = selectedValue;
    this.optionChange.emit(selectedValue);
  }
}