import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'loginstudent', pathMatch: 'full' },
  { path: 'choose', loadChildren: './choose/choose.module#ChoosePageModule' },
  { path: 'daftar-student', loadChildren: './daftar-student/daftar-student.module#DaftarStudentPageModule' },
  { path: 'listsubject', loadChildren: './listsubject/listsubject.module#ListsubjectPageModule' },
  { path: 'loginstudent', loadChildren: './loginstudent/loginstudent.module#LoginstudentPageModule' },
  { path: 'page-pertama', loadChildren: './page-pertama/page-pertama.module#PagePertamaPageModule' },
  { path: 'splashscreen', loadChildren: './splashscreen/splashscreen.module#SplashscreenPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
