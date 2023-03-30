import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeadingComponent } from './page-heading/page-heading.component';
import { TimeDurationPipe } from './timeDuration.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    PokemonModule,
    FormsModule,
    MatButtonModule,
    MatTooltipModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    PageHeadingComponent,
    TimeDurationPipe,
    PageNotFoundComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
