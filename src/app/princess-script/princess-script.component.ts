import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { princessList } from '../princesses'
import { PrincessService } from '../princess.service';

@Component({
  selector: 'app-princess-script',
  templateUrl: './princess-script.component.html',
  styleUrls: ['./princess-script.component.css']
})
export class PrincessScriptComponent implements OnInit {
princess;
princesses = this.princessService.princessList;
  constructor(private route: ActivatedRoute, private princessService: PrincessService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.princess = this.princesses[+params.get("princessId")];
    })
  }

}