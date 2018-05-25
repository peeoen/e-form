import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { ReportsComponent } from './components/reports/reports.component';

const routes: Routes = [
    { path: '', redirectTo: '/forms', pathMatch: 'full' },
    { path: 'forms', component: ReportsComponent },
    { path: 'forms-builder', component: FormBuilderComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
