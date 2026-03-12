import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  sistemas = [
    {nome: 'Enfermagem', link:'https://9159prd.cloudmv.com.br/mvpep'},
    {nome: 'Médico',link:'https://9159prd.cloudmv.com.br/mvpep'},
    {nome: 'Triagem', link:'https://9159prd.cloudmv.com.br/mvsacr'},
    {nome: 'Radiologia', link:'http://laudo.hospitalsamar.com.br/'},
    {nome: 'Google Chat', link:'https://mail.google.com/chat/u/0/#chat/home'},
    {nome: 'Gmail', link:'https://mail.google.com'},
    {nome: 'Suporte TI', link:'https://suporte.redesamar.com.br/'},
    {nome: 'Manutenção', link:'https://manutencao.redesamar.com.br/'},
    {nome: 'Evento adverso',link: 'https://docs.google.com/forms/d/e/1FAIpQLScP_geTiJmS-wDFgpBD613hgVw0NKN_wT_WU1bx6oSYqyCJ1A/viewform'}
  ]
  icons = [
    {icon:'local_hospital'},
    {icon: 'local_hospital'},
    {icon: 'local_hospital'},
    {icon: 'compare'},
    {icon:'chat'},
    {icon:'mail'},
    {icon:'computer'},
    {icon:'engineering'},
    {icon:'edit_calendar'}
  ]
   constructor() { }

  ngOnInit() {
  }

}
