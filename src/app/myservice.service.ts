import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User} from './user';
import { SearchMusic } from './serachmusic';

@Injectable()
export class MyService
{
    users:any;

    constructor(private http:HttpClient){

    }
    getAllUsers():Observable<User[]>{
       

        return this.http.get<User[]>("http://jsonplaceholder.typicode.com/users");
    }
    getAllMusicAlbum(term):Observable<SearchMusic[]>
    {
        let url=`https://itunes.apple.com/search?term=${term}&media=music&limit=20`;
        console.log(url);
        return this.http.get<SearchMusic[]>(url);

    }
}