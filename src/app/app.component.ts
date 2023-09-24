import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app2';

name:string='admin'
age:number=45
img:string='https://angular.io/assets/images/logos/angular/shield-large.svg'
link:string='https://angular.io/guide/setup-local'
f:null=null
r:any[]=[]
tt:any={}
fff:string=''
color:string="#f00"

text:boolean=false

tow:string=''

  constructor(){}

open(event:any){
  console.log(event.target.value);
}
ooo(pp:any){
console.log(pp);
}
}
