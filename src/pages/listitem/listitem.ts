import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AudioProvider } from 'ionic-audio';

/**
 * Generated class for the ListitemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-listitem',
  templateUrl: 'listitem.html',
})
export class ListitemPage {
   myTracks: any[];
  singleTrack: any;
  allTracks: any[];
  selectedTrack: number;
   
  constructor(private _audioProvider: AudioProvider) { 
    // plugin won't preload data by default, unless preload property is defined within json object - defaults to 'none'
    this.myTracks = [{
      src: 'assets/audio/nol.mp3',
      art: '../assets/icon/001-number.png',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    },
    {
      src: 'assets/audio/satu.mp3',
      art: '../assets/icon/009-one.png',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    },
    {
      src: 'assets/audio/dua.mp3',
      art: '../assets/icon/008-two.png',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    },
    {
      src: 'assets/audio/tiga.mp3',
      art: '../assets/icon/007-three.png',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    },
    {
      src: 'assets/audio/empat.mp3',
      art: '../assets/icon/006-four.png',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    },
    {
      src: 'assets/audio/lima.mp3',
      art: '../assets/icon/005-five.png',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    },
    {
      src: 'assets/audio/enam.mp3',
      art: '../assets/icon/six.png',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    },
    {
      src: 'assets/audio/tujuh.mp3',
      art: '../assets/icon/004-seven.png',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    },
    {
      src: 'assets/audio/delapan.mp3',
      art: '../assets/icon/003-eight.png',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    },
    {
      src: 'assets/audio/sembilan.mp3',
      artist: 'John Mayer',
      title: 'Who Says',
      art: '../assets/icon/002-nine.png',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
    }];
  }
  
  ngAfterContentInit() {     
    // get all tracks managed by AudioProvider so we can control playback via the API
    this.allTracks = this._audioProvider.tracks; 
  }
  
  playSelectedTrack() {
    // use AudioProvider to control selected track 
    this._audioProvider.play(this.selectedTrack);
  }
  
  pauseSelectedTrack() {
     // use AudioProvider to control selected track 
     this._audioProvider.pause(this.selectedTrack);
  }
         
  onTrackFinished(track: any) {
    console.log('Track finished', track)
  } 
}
