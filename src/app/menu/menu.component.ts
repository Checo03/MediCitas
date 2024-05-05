import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private router:Router) {}
  
}
