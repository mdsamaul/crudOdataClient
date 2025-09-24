import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonService } from './server/person.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit{
deletePerson(id:number) {
this.ss.deletePerson(id).subscribe(()=>{
  this.loadPeople();
  this.resetFrom();
})
}
EditPerson(p:any) {
this.person={...p}
}
resetFrom() {
 this.person= {
      "id": null,
      "userName": "",
      "firstName": "",
      "lastName": "",
      "email": "",
      "gender": ""
    };
}
createPerson() {
if(this.person.id){
  this.ss.updatePerson(this.person.id, this.person).subscribe(()=>{
     this.loadPeople();
  this.resetFrom();
  })
}else{
  const payload ={
  
    userName:this.person.userName,
    firstName:this.person.firstName,
    lastName:this.person.lastName,
    email:this.person.email,
    gender:this.person.gender
  }
  this.ss.addPerson(payload).subscribe(()=>{
     this.loadPeople();
  this.resetFrom();
  })
}
}
  title = 'proj8client';
  people:any[]=[];
  person= {
      "id": null,
      "userName": "",
      "firstName": "",
      "lastName": "",
      "email": "",
      "gender": ""
    };
    constructor(private ss:PersonService){}
  ngOnInit(): void {
this.loadPeople();
  }
loadPeople(){
  this.ss.people().subscribe((res)=>{
this.people= res.value;
  })
}
}
