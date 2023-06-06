import { Component} from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-fat-foradoprazo',
  templateUrl: './fat-foradoprazo.component.html',
  styleUrls: ['./fat-foradoprazo.component.css']
})
export class FatForadoprazoComponent  {
  constructor(private http: HttpClient) { }

  mes: string = '';
  enviado = false;
  lista_foradoprazo: any = [];

    envia() {
    this.enviado = true;
    const campos = "mes=" + this.mes;
    const url = 'http://localhost:3000/foradoprazo';
    this.http.post(url, campos).subscribe(
      (resposta) => {
        this.lista_foradoprazo = resposta;
        console.log(this.lista_foradoprazo);
      },
      (erro) => console.log(erro)
    );
  }


}