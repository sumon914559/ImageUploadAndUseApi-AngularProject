import { Component } from '@angular/core';
import { NidImageUpload } from './Models/NidImageUpload';
import { NidUploadService } from './services/nid-upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private Nidservice : NidUploadService){}
  edited: boolean = false;
  imgEdited: boolean = false;
  imgEdited1: boolean = false;
  title = 'web';
  public imagePath : any;
  public imagePath1 : any;
  imgURL: any;
  setImg : any;
  
  imgURL1: any;
  setImg1 :any;
  public showMessage : string = "";
  public showMessage1 : string = "";
  body : any;
  ngOnInit() {
    this.imgEdited = false;
    this.imgEdited1 = false;
    this.body = new Response();
  }
  preview(files : any) {
    debugger;
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.showMessage = "Only Jpeg,jpg,png images are supported .";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
    this.setImg = files[0];
    this.imgEdited = true;
  }

  preview1(files : any) {
    debugger;
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.showMessage1 = "Only Jpeg,jpg,png images are supported .";
      return;
    }
    var reader = new FileReader();
    this.imagePath1 = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL1 = reader.result; 
    }
    this.setImg1 = files[0];
    this.imgEdited1 = true;
  }
  public nidUploadImage : NidImageUpload = new NidImageUpload();
 
  submit(){
    
    this.nidUploadImage.nidFont = this.setImg;
    this.nidUploadImage.nidBack = this.setImg1;
    this.Nidservice.getPosts(this.nidUploadImage)
        .subscribe((res : any) => {
          console.log("res", res.body);
          this.body = res.body;
          this.edited = true;
        });
  }
  goToBack(){
    this.edited = false;
    this.imgEdited = false;
    this.imgEdited1 = false;
    this.imgURL = null;
    this.imgURL1 = null;
  }

}
