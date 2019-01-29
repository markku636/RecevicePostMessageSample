
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

// rxjs
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
    private setTimeout:number = 30000;  

    constructor(private http:HttpClient) {
    }
      
      private addAuthorization(options:any):void {
        // options['headers'] = {
        //       'Authorization': '1drf5dg4d7s4w7z',
              
        // };
      }
        
      public get(url :string , callback?: Function, errorCallback?: Function, completeCallback?: Function ,time = this.setTimeout,showLoading: boolean = false):Observable<any> {
        let thiUrl = url;  
        let options = {};  
        let thisTime = time; 
        this.addAuthorization(options);  
        return this.http.get(thiUrl, options)
              .timeout(thisTime)
              .catch(this.httpErrorFun)  
              .map(this.resFun);
      }
   
      private resFun(data:any):any {          
        debugger
        return data;  
      }


      public httpErrorFun(err:any):Observable<string> {
        debugger;
        let res:string = ''; 
        let data:any = err;  
        let status = err.status;
        
        if (data.hasOwnProperty('error') && data.hasOwnProperty('message')) {
              res = data.message;

        
        } else if (data.hasOwnProperty('name')) {
              let errName = data.name;

          
          if (errName == 'TimeoutError') {
            res = '對不起，請求超時了';
          }

          
        } else if (data == "Unauthorization") {
              res = '您沒有權限，請重新登錄';
            } else {
              res = "哎呀，不知道是啥錯誤~~";
        }

        return Observable.throw(res);
      }
}