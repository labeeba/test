import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


// import { SenderService } from './sender.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})


export class TestPage implements OnInit {
  api: Observable<any>;
  file: Blob;
  audioFile: Blob;
  formData: FormData;
  test_file: string;
  formthing: JSON;



  // sound_filepath: string;
  // postUrl = 'http://127.0.0.1:5001/test_wav'; // change this to express route.
  fetchAudioUrl = 'http://localhost:8100/assets/sound/to_test_mono2.wav';
  // audiofile: string;



  // express server this works!!!!!!
  constructor(private httpClient: HttpClient) {
    this.api = this.httpClient.get('http://127.0.0.1:5001/', { responseType: 'text' });
    this.api.subscribe(data => {
      console.log('my data:', data);
    });
    // this.sound_filepath = 'assets/sound/to_test_mono2.wav';
  }


  async getAudio() {
    this.api = this.httpClient.get(this.fetchAudioUrl, { responseType: 'blob' });
    this.api.subscribe(data => {
      this.file = new Blob([data], { 'type': 'audio/wav; codecs=MS_PCM' });

      console.log('gotfile', this.file);
    });
    return this.file;

  }


  // for express
  async predict() {
    this.test_file = '../to_test_mono2.wav';
    this.audioFile = await this.getAudio(); // calling the function to get audio
    this.formData = new FormData();
    this.formData.append('file', this.test_file);
    // original line below
    const file = new File([this.audioFile], 'heartsoundz', { lastModified: 1534584790000 });
    this.api = this.httpClient.post('http://localhost:5001/predict', file, { responseType: 'text' });
    // for testing
    // this.api = this.httpClient.get('http://localhost:8080/predict', { responseType: 'text' });
    // this.api = this.httpClient.post(this.postUrl, { 'file': this.audioFile });
    this.api.subscribe(data => {
      console.log('prediction:', data);
    });



  }

  // for flask
  // async predict() {
  //   this.audioFile = await this.getAudio(); // calling the function to get audio
  //   const formData: FormData = new FormData();
  //   formData.append('file', this.audioFile);
  //   this.api = this.httpClient.post('http://127.0.0.1:5001/test_wav', formData, { responseType: 'text' });
  //   // this.api = this.httpClient.post(this.postUrl, { 'file': this.audioFile });
  //   this.api.subscribe(data => {
  //     console.log('my data:', data);
  //   });


  // }

  // upload_wav() {
  //   const formData = new FormData();
  //   const audioFile = 'assets/sound/to_test_mono2.wav';
  //   formData.append('myAudioFile', audioFile);
  //   this.api = this.httpClient.post('http://127.0.0.1:5001/test_wav', formData, { responseType: 'text' });

  //   this.api.subscribe(data => {
  //     console.log('my data:', data);

  //   });


  // }





  ngOnInit() {

  }

}
