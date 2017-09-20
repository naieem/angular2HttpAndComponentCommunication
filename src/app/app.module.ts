import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeadComponent } from './head/head.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
/**
 * service declaration
 */
import { DataserviceService } from './service/dataservice.service';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeadComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    RightSidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
    DataserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
