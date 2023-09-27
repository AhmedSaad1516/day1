import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private toaster:ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
         
      catchError((error:HttpErrorResponse)=>{
          
        
      


          if(error.status==401){
            this.toaster.error(error.error.message)
            let audio = new Audio()
            audio.src="../../../assets/mixkit-arcade-retro-game-over-213.wav"
            audio.load()
            audio.play()  
            
          }else{
          
          
        } 

        throw error
      })
    
    )
  }
}
