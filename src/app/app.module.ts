import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingScreenComponent } from './pages/landing-screen/landing-screen.component';
import { HeaderComponent } from './components/header/header.component';
import { CatalogService } from './services/catalog.service';
import { CategoryScreenComponent } from './pages/category-screen/category-screen.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';

const routes: Routes = [
  { path: '', component: LandingScreenComponent },
  {
    path: 'branch/:branchId',
    component: CategoryScreenComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LandingScreenComponent,
    HeaderComponent,
    CategoryScreenComponent,
    CategoryCardComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [CatalogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
