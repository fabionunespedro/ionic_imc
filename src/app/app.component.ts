import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonContent, IonTitle, IonButton, IonFooter } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonFooter, IonButton, IonTitle, IonContent, IonToolbar, IonHeader, IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
