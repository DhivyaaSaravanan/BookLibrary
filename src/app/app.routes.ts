import { Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { ManagebookComponent } from './managebook/managebook.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
  {
    path:"addbook",
    component:AddbookComponent
  },
  {
    path:"managebook",
    component:ManagebookComponent
  },
  {
    path:"homepage",
    component:HomepageComponent
  }
];
