
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.scss']
})
export class ComputersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  } 

  getInfomation(){

    
    

      /** Referencia del cuerpo de la tabla */
      // const tbody = document.querySelector('#list-table tbody');
      // tbody.innerHTML = ''; // Limpia la tabla

      // response.data.forEach(item => {
      //   tbody.innerHTML += `<tr>
      //     <td>${item.gce_nombre_equipo}</td>
      //     <td>${item.gce_board}</td>
      //     <td>${item.gce_case}</td>
      //     <td>${item.gce_procesador}</td>
      //     <td>${item.gce_grafica}</td>
      //     <td>${item.gce_ram}</td>
      //     <td>${item.gce_disco_duro}</td>
      //     <td>${item.gce_teclado}</td>
      //     <td>${item.gce_mouse}</td>
      //     <td>${item.gce_pantalla}</td>
      //     <td>
      //       <div class="form-check form-switch">
      //         <input class="form-check-input" type="checkbox" role="switch" ${Number(item.gce_estado) === 1 ? 'checked' : ''}
      //           onchange="Computador.updateStatus(${item.gce_id}, event.target.checked)">
      //       </div>
      //     </td>
      //     <td>
      //       <button type="button" class="btn btn-light" onclick="Computador.edit(${item.gce_id})">
      //        <i class="fa-sharp fa-solid fa-pen"></i>
      //       </button>
      //     </td>
      //     <td>
      //      <button type="button" class="btn btn-light" onclick="Computador.delete_register(${item.gce_id})">
      //       <i class="fa-sharp fa-solid fa-trash-can"></i>
      //      </button>
      //     </td>
      //   </tr>`; // Añade la fila a la tabla
      // });
  }

}
