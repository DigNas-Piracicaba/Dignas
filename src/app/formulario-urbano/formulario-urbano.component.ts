import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-urbano',
  templateUrl: './formulario-urbano.component.html',
  styleUrls: ['./formulario-urbano.component.css']
})
export class FormularioUrbanoComponent implements OnInit {
  constructor() { }

    isShown: boolean = false
    isShown2: boolean = false
    isShown3: boolean = false
    isShown4: boolean = false

    ngOnInit(): void {
    }
  
  
    toggleShowT1() {
      this.isShown = true;
    }

    toggleShowF1() {
      this.isShown = false;
    }

    toggleShowT2() {
      this.isShown2 = true;
    }

    toggleShowF2() {
      this.isShown2 = false;
    }

    toggleShowT3() {
      this.isShown3 = true;
    }

    toggleShowF3() {
      this.isShown3 = false;
    }

    toggleShowT4() {
      this.isShown4 = true;
    }

    toggleShowF4() {
      this.isShown4 = false;
    }

  
  }

  