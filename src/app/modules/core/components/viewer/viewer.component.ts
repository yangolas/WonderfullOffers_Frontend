import { Component, Input, OnInit } from '@angular/core';
import { viewerType } from '../../enums/enumViewerComponent';
import { NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  @Input() templatesToUpload = [
    {src:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg', isSelected:false},
    {src:'https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736875_640.jpg', isSelected:false},
    {src:'https://cdn.pixabay.com/photo/2015/06/19/20/13/sunset-815270_640.jpg', isSelected:false}
  ]

  public viewerType = viewerType;
  @Input() type: viewerType;

  constructor(config: NgbCarouselConfig) {
    config.interval = 0;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
  }

  toggleSelection(index: number) 
  {
    this.templatesToUpload[index].isSelected = !this.templatesToUpload[index].isSelected;
  }

}
