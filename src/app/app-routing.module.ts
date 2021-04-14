import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormArrayComponent } from './form-array/form-array.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


const routes: Routes = [
  { path: '', redirectTo: "/reactive-form", pathMatch: "full" },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'form-array', component: FormArrayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
