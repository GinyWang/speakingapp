import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class APIService {
  ENDPOINT = 'https://as82te1sjh.execute-api.us-east-1.amazonaws.com/dev';
  constructor(private http:HttpClient) {}
  speak(data: { text: any; voice: string; }) {
    return this.http.post(this.ENDPOINT, data);
  }
}