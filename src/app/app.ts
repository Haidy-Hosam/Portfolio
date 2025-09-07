import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./componantes/Navbar/navbar";
import { Home } from "./componantes/home/home";
import { Footer } from "./componantes/footer/footer";
import { Header } from "./componantes/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Footer, Header],
  templateUrl:'./app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Project_1');
}
