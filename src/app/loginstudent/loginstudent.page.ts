import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginstudent',
  templateUrl: './loginstudent.page.html',
  styleUrls: ['./loginstudent.page.scss'],
})
export class LoginstudentPage implements OnInit {
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

listSubject() {
        this.router.navigate(['listsubject']);
      }

daftarstudent() {
    this.router.navigate(['daftar-student']);
}
}
