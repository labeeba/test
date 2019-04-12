import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'main', loadChildren: './main/main.module#MainPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  // { path: 'measure', loadChildren: './measure/measure.module#MeasurePageModule' },
  // { path: 'history', loadChildren: './history/history.module#HistoryPageModule' },
  { path: 'accelerometer', loadChildren: './accelerometer/accelerometer.module#AccelerometerPageModule' },
  { path: 'stethoscope', loadChildren: './stethoscope/stethoscope.module#StethoscopePageModule' },
  { path: 'recording', loadChildren: './recording/recording.module#RecordingPageModule' },
  // { path: 'activity', loadChildren: './activity/activity.module#ActivityPageModule' },
  { path: 'test', loadChildren: './test/test.module#TestPageModule' },
  { path: 'senderservice', loadChildren: './senderservice/senderservice.module#SenderservicePageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
