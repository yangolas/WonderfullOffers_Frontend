import { Component, Input, OnInit } from '@angular/core';
import { groupboxType } from '../../enums/enumGroupboxComponent';
import { viewerType } from '../../enums/enumViewerComponent';


@Component({
  selector: 'app-groupbox',
  templateUrl: './groupbox.component.html',
  styleUrls: ['./groupbox.component.css']
})
export class GroupboxComponent implements OnInit {
  public viewerType = viewerType;
  public groupboxType = groupboxType;
  @Input() title:string;
  @Input() type: groupboxType;
  constructor() { }

  ngOnInit(): void {

  }

}
