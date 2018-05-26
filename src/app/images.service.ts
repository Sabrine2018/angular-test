import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import "rxjs/Rx";

@Injectable()
export class ImagesService {
  images: any[];

  constructor(private httpClient: HttpClient) { }

  getImages() {
    return this.httpClient
      .get<any[]>('http://94.23.18.212:8080/api/categories?language=EN')
      .subscribe(
      (Response) => {
        this.images = Response;

      },
      (error) => {
        console.log('erreur de chargement' + error);
      }
      );

  }
}
