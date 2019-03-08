import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  public song:Array<object> = null;
  
  constructor() { }
  getSongs(){
    return this.songs = [{
      artist: 'Metalica',
      name: 'Nothing else metter',
      url: 'https://www.youtube.com/watch?v=tAGnKpE4NCI'
    },
    {
      artist: 'Queen',
      name: 'I want to break free',
      url: 'https://www.youtube.com/watch?v=WUOtCLOXgm8'
    }];
  }
}
