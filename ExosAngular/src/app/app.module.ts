import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Exercise1Component } from "./exercise1/exercise1.component";
import { Exercise2Component } from "./exercise2/exercise2.component";
import { Exercise3Component } from "./exercise3/exercise3.component";
import { appConfig } from "./app.config";
import { RouterModule } from "@angular/router";

@NgModule ({
    imports: [BrowserModule, FormsModule, Exercise1Component, Exercise2Component, Exercise3Component, RouterModule.forRoot(appConfig.routes)]
})

export class AppModule {}