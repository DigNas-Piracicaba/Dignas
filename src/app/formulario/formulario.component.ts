import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  yesnoCheck() {
    if (ViewChild('opcao_filho_sim').checked) {
      (ViewChild('se_sim').style.visibility) = 'visible'
    } 
    else {
      (ViewChild('se_sim').style.visibility) = 'hidden'
    }
  
  }
  
  showDiv(divId: string, element: any) {
    ViewChild(divId).style.display = element.value == "Outro" ? 'block' : 'none';
  }


  
}

