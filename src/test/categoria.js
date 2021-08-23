"use strict"

 var assert = require('assert');
 var request = require('supertest')
 var app = require('../index.js')

 var request = request("http://localhost:5000")

 describe('categorias', function() {
     describe('GET', function(){
         it('Should return json as default data format', function(done){
             request.get('/api/v1/categorias')
                 .expect('Content-Type', /json/)
                 .expect(200, done);
         });
     });
 });