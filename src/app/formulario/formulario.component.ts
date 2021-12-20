import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  constructor(
  ) { }

    isShown: boolean = false
    isShown2: boolean = false
    isShown3: boolean = false
    isShown4: boolean = false
    isShown5: boolean = false

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

    toggleShowT5() {
      this.isShown5 = true;
    }

    toggleShowF5() {
      this.isShown5 = false;
    }

}

