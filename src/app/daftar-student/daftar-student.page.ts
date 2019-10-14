import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daftar-student',
  templateUrl: './daftar-student.page.html',
  styleUrls: ['./daftar-student.page.scss'],
})
export class DaftarStudentPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['loginstudent']);
}
}
