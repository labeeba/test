import { Component, OnInit } from '@angular/core';

import { NavController, Platform } from '@ionic/angular';

import { File } from '@ionic-native/file/ngx';

import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-recording',
  templateUrl: './recording.page.html',
  styleUrls: ['./recording.page.scss'],
})
export class RecordingPage implements OnInit {
  api: Observable<any>;
  recording = false;
  filePath: string;
  fileName: string;
  audio: MediaObject;
  audioList: any[] = [];
  // audioList: any[] = [];
  prediction: string;
  constructor(public navCtrl: NavController,
    private media: Media,
    private file: File,
    public platform: Platform, private httpClient: HttpClient, private transfer: FileTransfer) {
    this.api = this.httpClient.get('http://localhost:8080/', { responseType: 'text' });
    this.api.subscribe(data => {
      console.log('my data:', data);
    });
  }

  getAudioList() {
    if (localStorage.getItem('audiolist')) {
      this.audioList = JSON.parse(localStorage.getItem('audiolist'));
      console.log(this.audioList);
    }
  }

  ionViewWillEnter() {
    this.getAudioList();
  }

  startRecord() {
    if (this.platform.is('ios')) {
      this.fileName = 'record' + new Date().getDate() + new Date().getMonth() +
        new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.wav';
      this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.audio = this.media.create(this.filePath);
    } else if (this.platform.is('android')) {
      this.fileName = 'record' + new Date().getDate() + new Date().getMonth() +
        new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.wav';
      this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.audio = this.media.create(this.filePath);
    }
    this.audio.startRecord();
    this.recording = true;

  }

  stopRecord() {

    this.audio.stopRecord();
    const data = { filename: this.fileName };
    this.audioList.push(data);
    localStorage.setItem('audiolist', JSON.stringify(this.audioList));
    this.recording = false;
    this.getAudioList();

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    // this.filePath = '../to_test_mono2.wav';
    const f = {
      file: this.filePath
    };

    this.api = this.httpClient.post('http://localhost:8080/predict', f, { headers, responseType: 'text' });
    this.api.subscribe(data2 => {
      console.log('prediction:', data2);
      this.prediction = data2;
    });

    // const fileTransfer: FileTransferObject = this.transfer.create();

    // const options: FileUploadOptions = {
    //   fileKey: 'file',
    //   fileName: this.fileName,
    //   mimeType: 'audio/wav',
    //   headers: {}
    // };

    // fileTransfer.upload(this.filePath, 'http://localhost:5001/predict', options)
    //   .then((data1) => {
    //     console.log(data1);

    //     // data1 should be the prediction I guess? its not fml
    //   }, (err) => {
    //     console.log(err);
    //   });

    //   const fileTransfer: FileTransferObject = this.transfer.create();
    //   const options: FileUploadOptions = {
    //     fileKey: 'file',
    //     fileName: 'test.aac',
    //     mimeType: 'audio/aac'
    //   };
    //   fileTransfer.upload('/', url, options)
    //     .then((data1) => {
    //       console.log(JSON.stringify(data1))
    //     }, (err) => {
    //       console.log(err);
    //     })
    // }, this.duration);


  }
  playAudio(file, idx) {
    if (this.platform.is('ios')) {
      this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + file;
      this.audio = this.media.create(this.filePath);
    } else if (this.platform.is('android')) {
      this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + file;
      this.audio = this.media.create(this.filePath);
    }
    this.audio.play();
    this.audio.setVolume(0.8);
  }


  async predict() {
    // this.test_file = '../to_test_mono2.wav';
    // this.audioFile = await this.getAudio(); // calling the function to get audio
    // this.formData = new FormData();
    // this.formData.append('file', this.test_file);
    // original line below
    // const file = new File([this.audioFile], 'heartsoundz', { lastModified: 1534584790000 });
    // this.api = this.httpClient.post('http://localhost:5001/predict', file, { responseType: 'text' });
    // for testing
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    // this.filePath = '../to_test_mono2.wav';
    const data = {
      file: '../to_test_mono2.wav'
    };

    this.api = this.httpClient.post('http://localhost:8080/predict', data, { headers, responseType: 'text' });
    this.api.subscribe(data2 => {
      console.log('prediction:', data2);
      this.prediction = data2;
    });

    // this.api = this.httpClient.get('http://localhost:8080/predict', { responseType: 'text' });
    // // this.api = this.httpClient.post(this.postUrl, { 'file': this.audioFile });
    // this.api.subscribe(data => {
    //   console.log('prediction:', data);
    //   this.prediction = data;
    // });

  }

  ngOnInit() {
  }

}
