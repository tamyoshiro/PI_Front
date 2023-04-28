import { Component, OnInit } from '@angular/core';
import 'bootstrap';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: Persona = new Persona("","","");

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.persona.nombre = "Tamy";
    this.persona.apellido = "Oshiro";
  
     this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

}
