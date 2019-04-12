import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-senderservice',
  templateUrl: './senderservice.page.html',
  styleUrls: ['./senderservice.page.scss'],
})

@Injectable()
export class SenderservicePage implements OnInit {
  postUrl = 'http://127.0.0.1:5001/test_wav';
  fetchAudioUrl = 'http://localhost:8100/assets/sound/to_test_mono2.wav';
  constructor(private http: HttpClient) { }
  send(audioFile: File) {
    const formData: FormData = new FormData();
    formData.append('file', audioFile, audioFile.name);
    return this.http.post(this.postUrl, formData);
  }

  getAudio(fileName: string) {
    return this.http.get(this.fetchAudioUrl + fileName, { responseType: 'blob' });
  }
  ngOnInit() {
  }

}
