import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../../services/services.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html'
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    public ajustes: SettingsService
    ) { }

  ngOnInit(): void {
    this.colocarCheck();
  }

  color(tema: string, link:any){

    this.setCheck(link);
    this.ajustes.aplicarTema(tema);

  }

  setCheck(link: any){
    let selectores:any = document.getElementsByClassName('selector');

    for (const ref of selectores) {
      ref.classList.remove('working');
    }

      link.classList.add('working');
  }

  colocarCheck() {
    let selectores:any = document.getElementsByClassName('selector');

    let tema = this.ajustes.ajustes.tema;

    for (const ref of selectores) {
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
    }
  }


}
