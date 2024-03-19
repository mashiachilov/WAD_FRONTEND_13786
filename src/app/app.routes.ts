import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReceptsComponent } from './pages/recepts/recepts.component';
import { ReceptsSingleComponent } from './pages/recepts-single/recepts-single.component';
import { ReceptsEditComponent } from './pages/recepts-edit/recepts-edit.component';
import { ReceptsCreateComponent } from './pages/recepts-create/recepts-create.component';
import { VisitorComponent } from './pages/visitor/visitor.component';
import { VisitorSingleComponent } from './pages/visitor-single/visitor-single.component';
import { VisitorEditComponent } from './pages/visitor-edit/visitor-edit.component';
import { VisitorCreateComponent } from './pages/visitor-create/visitor-create.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path:"recept",
        component: ReceptsComponent
    },
    {
        path:"recept/:id",
        component: ReceptsSingleComponent
    },
    {
        path:"recept/:id/edit", 
        component: ReceptsEditComponent
    },
    {
        path:"recept-create",
        component: ReceptsCreateComponent
    },
    {
        path:"visitor",
        component: VisitorComponent
    },
    {
        path:"visitor/:id",
        component: VisitorSingleComponent
    },
    {
        path:"visitor/:id/edit",
        component: VisitorEditComponent
    },
    {
        path:"visitor-create",
        component: VisitorCreateComponent
    }
];
