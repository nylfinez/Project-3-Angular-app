import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { routes } from "./app.routes";
import { Exercise1Component } from "./exercise1/exercise1.component";
import { Exercise2Component } from "./exercise2/exercise2.component";

@NgModule ({
    imports: [BrowserModule, FormsModule, Exercise1Component, Exercise2Component]
})

export class AppModule {}