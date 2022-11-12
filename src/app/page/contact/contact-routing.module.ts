import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByidComponent } from './byid/byid.component';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  {path: '', component: ContactComponent},
  {path: ':id', component: ByidComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
