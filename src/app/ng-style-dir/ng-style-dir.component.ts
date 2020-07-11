import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-ng-style-dir',
  templateUrl: './ng-style-dir.component.html',
  styleUrls: ['./ng-style-dir.component.css']
})
export class NgStyleDirComponent implements OnInit {

  paraColor: string
  paraSize: number
  paraFont: string

  size: string

  constructor() { }

  ngOnInit() {
  }

}
