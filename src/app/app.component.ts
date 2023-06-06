import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-fat';
  lista_faturas: any = [];

  constructor(private http: HttpClient) { }

  getFaturas() {
    const url = "http://localhost:3000/listafaturas";
    this.http.get(url).subscribe((res) => {
      this.lista_faturas = res;
      console.log(this.lista_faturas);
    });
  }

  ngOnInit() {
    this.getFaturas();
    
  }
}