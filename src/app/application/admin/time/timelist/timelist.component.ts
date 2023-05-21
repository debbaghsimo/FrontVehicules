import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { TimeService } from 'src/app/_core/service/time.service';

@Component({
  selector: 'app-timelist',
  templateUrl: './timelist.component.html',
  styleUrls: ['./timelist.component.css']
})
export class TimelistComponent {
  TimeList : Time[]|any;

  dtOptions:DataTables.Settings ={};

  constructor(private Time:TimeService){ }

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
this.Time.getTime().subscribe(res=>{
this.TimeList = res;
});
}
Delete(id:number){
  this.Time.deleteTime(id).subscribe(res=>{
    this.GetAll();
});
}
}
