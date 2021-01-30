import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  length=0
  useNumbers = false;
  useLetters = false;
  useSymbols = false;
  password=''

  onChangeLength(value:string){
    const x = parseInt(value);
    console.log(x);

    if(!isNaN(x)){
      this.length=x
    }
  }

  onUseNumberCheck(){
    this.password = ''
    this.useNumbers = !this.useNumbers
    console.log(this.useNumbers)
  }

  onUseLettersCheck(){
    this.password = ''
    this.useLetters = !this.useLetters
    console.log(this.useLetters)
  }

  onUseSymbolsCheck(){
    this.password = ''
    this.useSymbols = !this.useSymbols
    console.log(this.useSymbols)
  }

  generatePassword(){
    const numbers = '1234567890'
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const symbols = '!@#$%^&*(){}<>?[];|/'

    let verified_text = ''
    let final = ''

    if(this.useLetters == true){
      verified_text += letters
    }
    if(this.useNumbers == true){
      verified_text += numbers
    }
    if(this.useSymbols == true){
      verified_text += symbols
    }

    for(let i = 0; i<this.length; i++){

      final += verified_text[Math.floor(Math.random()*verified_text.length)]
    }

    this.password = final

  }

  onButtonClick(){
    this.password = ''

    if(this.useLetters == false && this.useNumbers == false && this.useSymbols == false){
      alert('please selected one box')
      return
    }
    if(this.length==0 || this.length > 10){
      alert('length must be between 1 - 10')
      return
    }else{
      this.generatePassword()
    }

    
  }

  getPassword(){
    return this.password
  }
}
