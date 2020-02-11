import { Component } from '@angular/core';
import { MyService } from './myservice.service';
import { User } from './user';
import { SearchMusic } from './serachmusic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MyService]
})
export class AppComponent {
  title = 'my-service8-app';
  users=new Array<User>();
  music=new Array<SearchMusic>();
  status:boolean;
  term:string;
  constructor( private myService:MyService){
    this.status=false;
  }
  callService(){
    this.status=true;
    this.myService.getAllUsers().subscribe(response=>{

      this.users=response.map(item=>{
        console.log(item.id +" "+item.name+" "+item.username+" "+item.email);
        return new User(item.id,item.name,item.username,item.email);
      });
    });
   
  }
  callMusicService()
  {
    this.myService.getAllMusicAlbum(this.term).subscribe(response=>
      {
        console.log(response.results);
   
        
        this.music=response.results.map(item=>{
          return new SearchMusic(item.artistName ,item.artistId);

        });
      });

  }
}  
