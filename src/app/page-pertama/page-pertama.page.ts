import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-pertama',
  templateUrl: './page-pertama.page.html',
  styleUrls: ['./page-pertama.page.scss'],
})
export class PagePertamaPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  loginstudent() {
    this.router.navigate(['loginstudent']);
  }
}
