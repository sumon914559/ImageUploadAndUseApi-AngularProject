import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NidImageUpload } from '../Models/NidImageUpload';

@Injectable({
  providedIn: 'root'
})
export class NidUploadService {

  constructor(private httpClient: HttpClient) { }

  url = "https://localhost:44368/CustomerInformation/Nid-upload";
  getPosts(data : NidImageUpload){
    const formData = new FormData();
    formData.append('nidFont', data.nidFont, data.nidFont.name);
    formData.append('nidBack', data.nidBack, data.nidBack.name);
    return this.httpClient.post(this.url, formData , {reportProgress: true, observe: 'events'});
  }
}
