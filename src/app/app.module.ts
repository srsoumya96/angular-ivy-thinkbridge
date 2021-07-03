import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { GlobalServiceService } from './global-service.service';
import { AppRoutingModuleModule } from './app-routing-module/app-routing-module.module';
import { LoginServiceService } from './login-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModuleModule],
  declarations: [AppComponent, LoginComponentComponent, HomeComponentComponent],
  bootstrap: [AppComponent],
  providers: [GlobalServiceService, LoginServiceService]
})
export class AppModule {}
