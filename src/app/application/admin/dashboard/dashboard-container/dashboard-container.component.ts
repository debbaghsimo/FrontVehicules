import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';
import { Vehicule } from 'src/app/_core/model/vehicule';
import { ConsommationService } from 'src/app/_core/service/consommation.service';
import { EngineService } from 'src/app/_core/service/engine.service';
import { OpertingcharService } from 'src/app/_core/service/opertingchar.service';
import { VehiculeService } from 'src/app/_core/service/vehicule.service';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.css']
})
export class DashboardContainerComponent implements OnInit{

  CVehicule:number|any;
  CConsommation:number|any;
  CEngine:number|any;
  COperting:number|any;

  constructor(private Vehicule:VehiculeService,private Consommation:ConsommationService,private Engine:EngineService,private Operting:OpertingcharService){}

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll(){
    this.Vehicule.getVehicule().subscribe(res=>{
      this.CVehicule = res.length;
    }
    );
    this.Engine.getAll().subscribe(res=>{
      this.CEngine = res.length;
    }
    );
    this.Consommation.getConsommation().subscribe(res=>{
      this.CConsommation = res.length;
    }
    );
    this.Operting.getOpertingchar().subscribe(res=>{
      this.COperting = res.length;
    }
    );
  }
}
