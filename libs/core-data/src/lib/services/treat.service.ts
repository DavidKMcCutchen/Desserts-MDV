import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Treat } from "@dessert/api-interfaces";

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class TreatService {
  model = 'treats';

  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient.get<Treat[]>(this.getUrl());
  }

  find(treatId: string) {
    return this.httpClient.get<Treat>(this.getUrlById(treatId));
  }

  create(treats: Treat) {
    return this.httpClient.post<Treat>(this.getUrl(), treats);
  }

  update(treats: Treat) {
    return this.httpClient.patch<Treat>(this.getUrlById(treats.id), treats);
  }

  delete({ id }: Treat) {
    return this.httpClient.delete<Treat>(this.getUrlById(id));
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`;
  }
}
