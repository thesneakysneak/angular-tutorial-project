import { Component, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
  <p>Detail Works {{ this.housingLocationId}}</p>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = 0;

  constructor(){
    this.housingLocationId = Number(this.route.snapshot.params['id']);
  }
}
