// Módulos Para Conexão MySQL
const mysql = require('mysql');
const qs = require('querystring');

// Módulos Para o O Servidor Http
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

// Criação do Server

const server = http.createServer((req,res) => {
    var faturas_json; // Variável para retorno dos dados

    // Caso a URL da requisição seja /listafaturas
    if (req.url == '/listafaturas'){

        // Realiza a conexão com o Server
        var con = mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"Silva140694",
            database:"webang"
        });

        sql = "select * from faturas";

        // Tenta Fazer a conxeão com o MySQL
        con.connect(function(err){
            if(err) throw err;
            console.log("Conectado:MySQL!")

            // Tenta Realizar a Consulta
            con.query(sql,function(err,result,fields){
                if(err) throw err;

                faturas_json = JSON.stringify(result);
                res.statusCode = 200;

                res.setHeader('Access-Control-Allow-Origin','*');
                res.writeHead(200,{"Content-Type":"application/json"});
                res.write(faturas_json);
                res.end();
                con.end();
            });
        });
    }

    if (req.url == '/foradoprazo'){

        let data = ''; // Variável que irá Conter os Dados da Requisição
        //Manipulador de Eventos data(evento que é acionado quando há dados para serem lidos na requisição)
        req.on('data',chunk =>{
            data += chunk;
        })

        req.on('end',() =>{
            var formulario = qs.parse(data);
            if(formulario.mes != "" && formulario.mes != null){
                var con = mysql.createConnection({
                    host:"localhost",
                    user:"root",
                    password:"Silva140694",
                    database:"webang"
                });
                
                sql = "select * from faturas where dt_vencto != dt_pagto and month(dt_vencto) = " + formulario.mes;
                con.connect(function(err){
                    if(err) throw err;

                    console.log("Conectado:MySQL!")
                    con.query(sql,function(err,result,fields){
                        if(err) throw err;
                    
                        faturas_json = JSON.stringify(result);
                        res.statusCode = 200;
                        res.setHeader('Access-Control-Allow-Origin', '*');
                        res.writeHead( 200, { 'Content-Type': 'application/json'} );
                        res.write( faturas_json );
                        res.end( );
                        con.end();
                    });
                });    
            }
        });
    }
});
server.listen(port,hostname,() => {
    console.clear();
    console.log(`Server Running at http://${hostname}:${port}/`);
});
