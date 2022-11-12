import { Component, OnInit } from '@angular/core';
import { ApiInformationService } from '../../service/api-information.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private apiService: ApiInformationService) {}

  inputData: any = {
    gce_nombre_equipo: '',
    gce_board: '',
    gce_case: '',
    gce_procesador: '',
    gce_grafica: '',
    gce_ram: '',
    gce_disco_duro: '',
    gce_teclado: '',
    gce_mouse: '',
    gce_pantalla: '',
  };

  ngOnInit(): void {}

  async saveInfomation() {
    const callMethodGet = await this.apiService.postData(
      "Caracteristicas",this.inputData
    ); 
  }
}
