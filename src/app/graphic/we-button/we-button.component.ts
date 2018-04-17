import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'we-button',
  templateUrl: './we-button.component.html',
  styleUrls: ['./we-button.component.scss']
})
export class WeButtonComponent implements OnInit {
  @Input() mytext: string;
  constructor() { }

  ngOnInit() {
  }

}
