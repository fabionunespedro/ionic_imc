import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard,
  IonButton, IonLabel, IonItem, IonInput, IonSelect, IonSelectOption
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
  standalone: true,
  imports: [
    IonItem, IonLabel, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonInput, IonSelect, IonSelectOption,
    CommonModule, FormsModule
]
})
export class ImcPage implements OnInit {

  peso: number = 0;
  altura: number = 0;
  sexo: string = '';
  resultado: number | null = null;
  classificacao: string = '';

  tabela = [
    { faixa: 'Abaixo do peso', mulher: '< 19', homem: '< 20' },
    { faixa: 'Normal', mulher: '19 - 23,9', homem: '20 - 24,9' },
    { faixa: 'Obesidade leve', mulher: '24 - 28,9', homem: '25 - 29,9' },
    { faixa: 'Obesidade moderada', mulher: '29 - 38,9', homem: '30 - 39,9' },
    { faixa: 'Obesidade mórbida', mulher: '>= 39', homem: '>= 40' }
  ];

  constructor() {}

  ngOnInit() {}

  calcularIMC() {
    if (this.peso && this.altura && this.sexo) {
      const imc = this.peso / (this.altura * this.altura);
      this.resultado = parseFloat(imc.toFixed(2));
      this.classificacao = this.classificarIMC(imc, this.sexo);
    }
  }

  classificarIMC(imc: number, sexo: string): string {
    if (sexo === 'feminino') {
      if (imc < 19) return 'Abaixo do peso';
      if (imc < 24) return 'Normal';
      if (imc < 29) return 'Obesidade leve';
      if (imc < 39) return 'Obesidade moderada';
      return 'Obesidade mórbida';
    } else {
      if (imc < 20) return 'Abaixo do peso';
      if (imc < 25) return 'Normal';
      if (imc < 30) return 'Obesidade leve';
      if (imc < 40) return 'Obesidade moderada';
      return 'Obesidade mórbida';
    }
  }
}
