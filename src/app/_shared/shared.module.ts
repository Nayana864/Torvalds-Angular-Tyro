import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { NotificationComponent } from './title/notification/notification.component';

@NgModule({
  declarations: [TitleComponent,SidebarComponent, NotificationComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule
  ],
  exports:[
    TitleComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
