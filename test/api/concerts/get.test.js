const chai = require('chai');
const chaiHttp = require('chai-http');
const Concerts = require('../../../models/concerts.model');
const server = require('../../../server');

chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;

describe('GET /api/concerts', () => {

    before(async () => {
        const testConcOne = new Concerts({ _id: '5d9f1140f10a81216cfd4408', performer: 'Kean Dysso', genre: 'Music Producer', price: 40, day: 1, image: '/img.pl' });
        await testConcOne.save();
    });



    it('should throw all concerts', async () => {
        const res = await request(server).get('/api/concerts');
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.equal(1);
    });

    it('should return concert by :id', async () => {
        const res = await request(server).get('/api/concerts/5d9f1140f10a81216cfd4408');
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.not.be.null;
    });

    it('should return selected performer', async () => {
        const res = await request(server).get('/api/concerts/performer/Kean Dysso');
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.equal(1);
    });

    it('should return selected genre', async () => {
        const res = await request(server).get('/api/concerts/genre/Music Producer');
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.equal(1);
    });

    it('should return selected day', async () => {
        const res = await request(server).get('/api/concerts/day/1');
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.equal(1);
    });

    it('should return selected price min/max', async () => {
        const res = await request(server).get('/api/concerts/price/1/99');
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.equal(1);
    });

    after(async () => {
        await Concerts.deleteMany();
    });
});