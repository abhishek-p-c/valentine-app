import { Component } from '@angular/core';
import { ValentineComponent } from './valentine/valentine';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ValentineComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
