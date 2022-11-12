import { Component, OnInit,Input,Output } from '@angular/core';
import { ApiInformationService } from 'src/app/service/api-information.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() inputData: any = {};
  constructor(private apiService:ApiInformationService){}
  
  ngOnInit(): void {
  }
  async saveInfomation() {
    const callMethodGet = await this.apiService.postData(
      'Caracteristicas',
      'addOne',
      this.inputData
    );
  }

}
