import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadChildren: () => import("./page/home/home.module").then(m => m.HomeModule)},

  {path:'contact', loadChildren: () => import("./page/contact/contact.module").then(m => m.ContactModule)},

  {path:'new', loadChildren: () => import("./page/new/new.module").then(m => m.NewModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
