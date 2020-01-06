const request = require('supertest');
require('dotenv').config();
const assert = require('chai').assert;

const requestContainer = request(process.env.API_BASEURL);
const API_PATH = 'users/2';

describe('Update User - PUT', function() {
    it('Validate 200 status code and response', function(done) {
        requestContainer
            .put(API_PATH)
            .send({ job: 'programmer' })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                assert.equal(res.body.job, 'programmer');
                return done();
            });
    });
});
