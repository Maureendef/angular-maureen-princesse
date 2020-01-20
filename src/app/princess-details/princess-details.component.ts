import { Component, OnInit, Input } from '@angular/core';
import {Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-princess-details',
  templateUrl: './princess-details.component.html',
  styleUrls: ['./princess-details.component.css']
})
export class PrincessDetailsComponent implements OnInit {

@Input() princess;
@Input() princessId;
@Output() like = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}