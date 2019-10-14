import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listsubject',
  templateUrl: './listsubject.page.html',
  styleUrls: ['./listsubject.page.scss'],
})
export class ListsubjectPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['loginstudent']);
  }

}
