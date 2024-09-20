import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstProject';
  name = 'Ajinkya';
  helloMessage(){
    return "Hello ajinkya";
  }
  celsius: number | null = null;
  fahrenheit: number | null = null;
  inputString: string = '';
  updateFahrenheit() {
    
  }

  updateCelsius() {
    
  }
}
