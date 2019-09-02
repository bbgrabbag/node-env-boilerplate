const request = require('supertest');
const config = require('./utils');
const app = require('../build/server').default;
const mongoose = require('mongoose');

describe('Test that server and DB are running', () => {
    beforeAll(config.connect);
    afterAll(config.disconnect);

    test('Environment variables are set', () => {
        expect(process.env.NODE_ENV).toEqual('test');
    });
    test('DB is connected', () => {
        expect(mongoose.connection.readyState === 1);
    })
    test('Server is running', async (done) => {
        request(app)
            .get('/')
            .expect(200, done)
    });
});

