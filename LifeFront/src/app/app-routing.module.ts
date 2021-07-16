import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashNavComponent } from './pages/user/dash-nav/dash-nav.component';
import { FeedbackComponent } from './pages/user/feedback/feedback.component';
import { FilesComponent } from './pages/user/files/files.component';
import { MoneyComponent } from './pages/user/money/money.component';
import { NotesComponent } from './pages/user/notes/notes.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { AuthGuard } from './services/auth.guard';
import { UserGuard } from './services/user.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo :'user',
    pathMatch:'full',
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[AuthGuard],
    pathMatch:'full',
  },
  {
    path:'signup',
    component:RegisterComponent,
    canActivate:[AuthGuard],
    pathMatch:'full',
  },
  {
    path:'login',
    component:LoginComponent,
    canActivate:[AuthGuard],
    pathMatch:'full',
  },
  {
    path:'user',
    component:DashNavComponent,
    canActivate:[UserGuard],
    children:[
      {
        path:'',
        component:UserProfileComponent,
      },
      {
        path:'money',
        component:MoneyComponent,
      },
      {
        path:'notes',
        component:NotesComponent,
      },
      // {
      //   path:'files',
      //   component:FilesComponent,
      // },
      // {
      //   path:'feedback',
      //   component:FeedbackComponent,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
