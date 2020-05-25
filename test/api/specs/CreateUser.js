const requestContainer = request(process.env.API_BASEURL);
const API_PATH = 'users';

const NAME = 'morpheus';
const JOB = 'leader';

describe('Testing Create a user', function() {
    it('Validate 200 status code and response body', function(done) {
        requestContainer
            .post(API_PATH)
            .send({
                name: NAME,
                job: JOB,
            })
            .expect('Content-Type', /json/)
            .expect(201)
            .end(function(err, res) {
                if (err) return done(err);
                // console.log(res.body);
                assert.equal(
                    res.body.name,
                    NAME,
                    'the name response doesnt match',
                );
                assert.property(
                    res.body,
                    'id',
                    'Validate if body contains property `id`',
                );

                return done();
            });
    });
});
