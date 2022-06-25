import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import {Formulario} from '../../entities/formulario';

@Component({
  selector: 'app-formulario-list',
  templateUrl: './formulario-list.component.html',
  styleUrls: ['./formulario-list.component.css']
})
export class FormularioListComponent implements OnInit {

  public formularios: Array<Formulario> = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.listarFormulario();
  }

  public listarFormulario(){
    this.apiService.listarFormularios().subscribe((data: any) => {
      this.formularios=data;
      console.log(data);
    });
  }

}
