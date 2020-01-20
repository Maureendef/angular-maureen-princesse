import { Component, OnInit } from '@angular/core';
import { princessList } from "../princesses";
import { PrincessService} from "../princess.service"

@Component({
  selector: 'app-princess-list',
  templateUrl: './princess-list.component.html',
  styleUrls: ['./princess-list.component.css']
})
export class PrincessListComponent  implements OnInit{
  princesses = princessList 
  constructor( private princessService: PrincessService) { }

  ngOnInit() {
  }
  like(princessId) {
    this.princesses[princessId].likes++;
    //alert('Princesse likée' + princessId);
  }
  addPrincess() {
    this.princesses.push({ name: 'Philippe', year:2019, imageUrl:'', likes:0, script: 'C\'est rigolo'});  
  }
}