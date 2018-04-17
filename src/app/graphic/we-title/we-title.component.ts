import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'we-title',
  templateUrl: './we-title.component.html',
  styleUrls: ['./we-title.component.scss']
})
export class WeTitleComponent implements OnInit {
  @Input() mytext: string;
  constructor() { }

  ngOnInit() {
  }

}
