import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Note } from './note';
import { HttpClient } from '@angular/common/http';

@Injectable(
  
)
export class NotesService {
  backend_url:string='http://localhost:3000/notes';
  constructor(private httpClient:HttpClient) { }
  getNotes(): Observable<Array<Note>> {
    return this.httpClient.get<Array<Note>>(this.backend_url);
  }

  addNote(note: Note): Observable<Note> {
    return this.httpClient.post<Note>(this.backend_url,note);

  }

}
