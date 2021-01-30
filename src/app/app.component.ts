import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  useNumbers = false;
  useLetters = false;
  useSymbols = false;
  password=''

  onUseNumberCheck(){
    this.useNumbers = !this.useNumbers
    console.log(this.useNumbers)
  }

  onUseLettersCheck(){
    this.useLetters = !this.useLetters
    console.log(this.useLetters)
  }

  onUseSymbolsCheck(){
    this.useSymbols = !this.useSymbols
    console.log(this.useSymbols)
  }

  onButtonClick(){
    this.password = 'super genius'
  }

  getPassword(){
    return this.password
  }
}
