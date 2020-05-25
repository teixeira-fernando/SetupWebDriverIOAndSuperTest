import schemaJsonResponse from '../schemas/GetSingleUser';

const requestContainer = request(process.env.API_BASEURL);
const API_PATH = 'users/2';

describe('Testing Get single user', function() {
    it('Validate 200 status code and response body', function(done) {
        requestContainer
            .get(API_PATH)
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                // console.log(res.body);
                assert.equal(
                    res.body.data.first_name,
                    'Janet',
                    'the first_name response doesnt match',
                );
                assert.property(
                    res.body.data,
                    'email',
                    'Validate if body.data contains property `email`',
                );

                assert.isNull(
                    schemaJsonResponse.validate(res.body).error,
                    'The response doenst match the expected schema',
                );

                return done();
            });
    });
});
