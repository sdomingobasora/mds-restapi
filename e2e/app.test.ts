import request from 'supertest';
import { superTestApp } from './setup';

describe('domain.com', () => {
  it('/hello -> 200', () => {
    request(superTestApp.app)
      .get('/hello')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.body).toBe(
          'Hello world! API Call number 1 since last restarted!',
        );
        expect(err).toBeNull();
      });
  });
});
