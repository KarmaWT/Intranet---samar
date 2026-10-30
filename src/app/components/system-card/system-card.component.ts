import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-system-card',
  templateUrl: './system-card.component.html',
  styleUrls: ['./system-card.component.scss'],
})
export class SystemCardComponent implements OnInit {
  @Input() systems: { name: string; link: string; icon: string }[] = [];

  sistemas = [{ nome: 'Imagens' }];
  icons = [{ icon: 'compare' }];

  constructor() {}

  ngOnInit(): void {}
}
