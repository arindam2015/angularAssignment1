import { Component, OnInit } from '@angular/core';
import { Note } from './note';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
 
  errMessage: string;
  note:Note=new Note();
  noteList:Array<Note> = [];
  error404Message: string;
  mandatoryFieldsMessage: string;
  constructor(private noteservice:NotesService) 
  { 
    //  this.note = new Note();
    //  this.noteList=[];
  }

  ngOnInit(): void {
    this.error404Message = `Http failure response for ${this.noteservice.backend_url}: 404 Not Found`;
    this.mandatoryFieldsMessage = 'Title and Text both are required fields';
    this.fetchNotes();
  }
  fetchNotes():void{
    this.noteservice.getNotes().subscribe((response:Array<Note>)=>
       this.noteList=response,
      error=>{
        this.errMessage=this.error404Message;
      });
  }
  addNote():void
  {
    this.errMessage='';
    if(this.note.text===' '||this.note.title===' '){
      this.errMessage=this.mandatoryFieldsMessage;
      return;
    }
    if (!(this.note.title || this.note.text)) {
      /**
       * Empty note
       */
      this.errMessage = this.mandatoryFieldsMessage;
      return;
    }

    this.noteList.push(this.note);

    this.noteservice.addNote(this.note).subscribe((response:Note)=>
      data=>{console.log(response)},
      error=>{
      this.errMessage=this.error404Message;
      });
    //console.log("After Adding to array !!!");
    //console.log(this.noteList);
    this.note = new Note();
  }

}
