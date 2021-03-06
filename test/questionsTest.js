/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');

const request = require('supertest');
const app = require('../api/v1/questions');

chai.use(chaiHttp);
chai.should();

describe('Questions endpoints test', () => {
  describe('All questions records should be returned', () => {
    it('Records are successfully returned', () => {
      request(app)
        .get('/questions')
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });
  describe('A specif question should be returned', () => {
    it('A specific question is returned', () => {
      const id = 1;
      chai.request(app)
        .get(`/meetups/${id}`);
    });
  });

  describe('Posting a question record', () => {
    it('it should post a question record', () => {
      const mt = {
        id: 2,
        createdOn: '2019-01-20',
        createdBy: 1,
        meetup: 2,
        title: 'What',
        body: '?',
        votes: 1,
      };
      request(app)
        .post('/questions')
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });

  describe('Upvoting and downvoting a question', () => {
    it('Votes has been upvoted or downvoted', () => {
      request(app)
        .patch('/questions/1/upvote')
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });
});
