const request = require('supertest');
require('dotenv').config();

const requestContainer = request(process.env.API_BASEURL);
const API_PATH = 'users/2';

describe('My first Test - GET', function() {
    it('Validate 200 status code ', function(done) {
        requestContainer
            .get(API_PATH)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
