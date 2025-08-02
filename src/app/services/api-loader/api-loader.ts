import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiLoader {
  baseUrl = "http://localhost:8080";
  
  constructor() {

  }

  async fetchData<T>(endpoint: string):Promise<T> {
    return await fetch(`${this.baseUrl}/${endpoint}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      });
  }
}
