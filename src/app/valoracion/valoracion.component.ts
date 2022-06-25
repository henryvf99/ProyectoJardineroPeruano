import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Usuario } from '../entities/usuario';

@Component({
  selector: 'app-valoracion',
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.css']
})
export class ValoracionComponent implements OnInit {

  public valoracion: Array<Usuario> = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.ListarValoracion();
  }

  public ListarValoracion(){
    this.apiService.listarValoraciones().subscribe((data: any) => {
        this.valoracion=data;
        console.log(data);
    });
    
  }

}
