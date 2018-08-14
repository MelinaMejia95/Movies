import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from '../services/themoviedb.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  populars: any = [];

  constructor(private _movieService: ThemoviedbService) { }

  ngOnInit() {
    this._movieService.getPopular().subscribe(data => {
      this.populars = data.results;
      console.log(this.populars)
    });
  }

}
