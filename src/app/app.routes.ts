import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages/pages.component';

import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
// import { Name3Component } from './';
// import { Name4Component } from './';
// import { PageNotFoundComponent } from './components/cursos/cursos.component'

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: '', redirectTo: '/dashbard', pathMatch: 'full' },
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: LoginComponent },
    // { path: 'graficas1', component: Gra },
    // { path: 'path4', component: Name4Component },
    { path: '**', component: NotfoundComponent },



    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
// export const APP_ROUTING = RouterModule.forRoot(routes);