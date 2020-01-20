import { Injectable } from '@angular/core';
import { princessList } from './princesses';

@Injectable()
export class PrincessService {
princessList = princessList;
  constructor() { }

}