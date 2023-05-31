import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { CreateuserComponent } from './pages/createuser/createuser.component';
import { UpdateuserComponent } from './pages/updateuser/updateuser.component';

const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'createUser',
    component: CreateuserComponent,
  },
  {
    path: 'updateUser/:id',
    component: UpdateuserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
