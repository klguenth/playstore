const mocha = require('mocha');
const supertest = require('supertest');
const apps = require('../data.js');
const expect = require('chai').expect;

describe('GET /apps endpoint', () => {
    it('should return filtered Apps', () => {
        const search = "";
        const results = apps.filter(app => app.App.includes(search.toLowerCase()));
        expect(results);
    });
});

