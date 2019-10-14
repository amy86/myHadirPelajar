import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.page.html',
  styleUrls: ['./choose.page.scss'],
})
export class ChoosePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['loginstudent']);
  }

}
