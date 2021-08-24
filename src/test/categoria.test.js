"use strict"

 var assert = require('assert');
 var request = require('supertest')
 var app = require('../index.js')

 var request = request("http://localhost:5000")


 var login_token = null;

 describe('login', () => {
     describe('POST', () => {
         it('debería devolver 200 y un token en un JSON', done => {
            request.post('login')
                .send({username:"guachon", password:"1234"})
                .expect('Content-Type', /json/)
                .expect(200);
            done();            
         });
     });
 });

 describe('getCategorias', function() {
     describe('GET', function(){
         it('Debería retornar JSON como formato de dato por defecto', function(done){
             request.get('/api/v1/categorias')
                 .expect('Content-Type', /json/)
                 .expect(200, done);
         });
     });
 });

 describe('addCategoria', function() {
    describe('POST', function(){
        it('Debería retornar JSON como formato de dato por defecto', function(done){            
            request.post('/api/v1/categorias')
                .send({name:"test", description: "prueba description", userId : 1})
                .expect('Content-Type', /json/)
                .expect(201, done);
        });
    });
});