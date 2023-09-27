import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginForm!:FormGroup
  constructor(private fb:FormBuilder, private serv:LoginService,
    private toastr: ToastrService
    ){
  }
  ngOnInit(){
    this.createForm()
  }
  createForm(){
  this.loginForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required]
  })
  }
  go(){
    this.serv.lgoin(this.loginForm.value).subscribe((data:any)=>{
      localStorage.setItem('token', data.data.token)
      let audio = new Audio()
      audio.src="../../../assets/mixkit-arcade-retro-game-over-213.wav"
      audio.load()
      audio.play()     
   this.toastr.success(data.message,'',{
    timeOut:3000,
    progressBar:true,
    closeButton:true
   })
    },error =>{
  
      
       
    })
  } 
}
