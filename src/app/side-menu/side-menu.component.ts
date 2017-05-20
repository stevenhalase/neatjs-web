import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  checkLocationMatch(term: String, secondaryTerm: String): Boolean {
    let secondaryMatch: Boolean = false;
    let termMatch = window.location.href.split('/')[window.location.href.split('/').length - 1] === term;
    if (secondaryTerm) {
      secondaryMatch = window.location.href.split('/')[window.location.href.split('/').length - 2] === secondaryTerm;
      return termMatch || secondaryMatch;
    } else {
      return termMatch;
    }
  }

}
