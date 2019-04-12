import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx';

@Component({
  selector: 'app-accelerometer',
  templateUrl: './accelerometer.page.html',
  styleUrls: ['./accelerometer.page.scss'],
})
export class AccelerometerPage implements OnInit {

  x: string;
  y: string;
  z: string;
  timeStamp: string;
  id: any;

  constructor(public navCtrl: NavController, private deviceMotion: DeviceMotion) {
    this.x = '-';
    this.y = '-';
    this.z = '-';
    this.timeStamp = '-';
  }
  start() {

    try {
      const option: DeviceMotionAccelerometerOptions = {
        frequency: 200

      };
      this.id = this.deviceMotion.watchAcceleration(option).subscribe((acc: DeviceMotionAccelerationData) => {
        this.x = '' + acc.x;
        this.y = '' + acc.y;
        this.z = '' + acc.z;
        this.timeStamp = '' + acc.timestamp;
      }
      );
    } catch (err) {
      alert('Error' + err);
    }


  }

  stop() {
    this.id.unsubscribe();
  }



  ngOnInit() {
  }

}
