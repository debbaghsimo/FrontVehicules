import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consommation } from 'src/app/_core/model/consommation';
import { ConsommationService } from 'src/app/_core/service/consommation.service';

@Component({
  selector: 'app-consommationlist',
  templateUrl: './consommationlist.component.html',
  styleUrls: ['./consommationlist.component.css']
})
export class ConsommationlistComponent implements OnInit{

  dtOptions:DataTables.Settings ={};
  ConsommationList: Consommation[]|any;

  constructor(private ConsommationService:ConsommationService,private router:Router){}

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
  this.ConsommationService.getConsommation().subscribe(res=>{
    this.ConsommationList = res;
  })
}


delete(id:number){
  this.ConsommationService.deleteConsommation(id).subscribe(res=>{
  this.GetAll();
  })
}

}
