import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-predmety-host',
  standalone: true,
  imports: [],
  templateUrl: './predmety-host.component.html',
  styleUrl: './predmety-host.component.scss'
})
export class PredmetyHostComponent {

  id: string|null = null;
  private readonly route = inject(ActivatedRoute)

  constructor() {
    this.id = this.route.snapshot.paramMap.get('idPredmetu');
    console.log(this.id);
    // Ziskaj zoznam testov pre predmet {idPredmetu}
  }
}
