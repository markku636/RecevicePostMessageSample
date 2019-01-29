import { Component, OnInit } from '@angular/core';
import { DataService} from 'src/app/common/data.service';
import { ConfigService } from 'src/app/common/config.service';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [DataService]

})
export class UserComponent implements OnInit {

  constructor(private req:DataService ,private configService:ConfigService) { }

  
  ngOnInit() {        
    this.configService.get

    
    this.req.get("http://data.taipei/opendata/datalist/apiAccess?scope=datasetMetadataSearch&q=id:5cb73231-b741-48b3-bec3-2ef57bb10029")
    .subscribe(
  res=>{
      alert('ajx success')
      alert("result:"+res);
      console.log(res);
      
    },err=>{  

      alert('ajx fail')
      debugger;
  console.log(err);      
})


  }



}
