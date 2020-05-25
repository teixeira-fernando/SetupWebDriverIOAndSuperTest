const requestContainer = request(process.env.API_BASEURL);
const API_PATH = 'users?page=2';

describe('Testing Get list of users', function() {
    it('Validate 200 status code and response body', function(done) {
        requestContainer
            .get(API_PATH)
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                // console.log(res.body);

                assert.isTrue(
                    Array.isArray(res.body.data),
                    'validate that the response is a list of items',
                );
                assert.isTrue(
                    res.body.data.length > 0,
                    'Validate if there is more than one user returned',
                );

                /* const {
                    error,
                    value
                } = schemaJsonResponse.validate(res.body);
                assert.isNull(error, 'The response doenst match the expected schema') */

                return done();
            });
    });
});
