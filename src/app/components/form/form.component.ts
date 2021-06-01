import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarroModel } from '../../model/carro.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  carro: CarroModel;

  constructor(){ }

  ngOnInit(){
    this.carro = new CarroModel();
  }
  onSubmit(form: NgForm){
    if(form.invalid){return;}

    console.log('formulario enviado');
    console.log(this.carro);
    console.log(form);
  }
}
