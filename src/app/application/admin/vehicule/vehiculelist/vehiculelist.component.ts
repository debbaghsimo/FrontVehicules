import { Component } from '@angular/core';
import { Vehicule } from 'src/app/_core/model/vehicule';
import { VehiculeService } from 'src/app/_core/service/vehicule.service';


@Component({
  selector: 'app-vehiculelist',
  templateUrl: './vehiculelist.component.html',
  styleUrls: ['./vehiculelist.component.css']
})

export class VehiculelistComponent {
  VehiculeList : Vehicule[]|any;

  dtOptions:DataTables.Settings ={};

  constructor(private Vehicule:VehiculeService){ }

  ngOnInit(): void {
    this.GetAll();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      deferRender: true,
      destroy:true
    }
}

GetAll(){
this.Vehicule.getVehicule().subscribe(res=>{
this.VehiculeList = res;
});
}
Delete(id:number){
  this.Vehicule.deleteVehicule(id).subscribe(res=>{
    this.GetAll();
});
}
}
