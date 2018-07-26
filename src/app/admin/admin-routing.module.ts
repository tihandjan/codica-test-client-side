import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './admin.component';
import { AdminGuard } from '../guards/admin.guard';

const routes: Routes =  [
    {
        path: '', component: AdminComponent,
        canActivate: [AdminGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'authors', component: AuthorsComponent },
        ]
    },
    {
        path: 'login', component: LoginComponent
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
