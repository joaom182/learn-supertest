import request from 'supertest';
import { app } from '../../../app';

describe('BarController integration tests', () => {
  it('should return status code ok', async () => {
    const response = await request(app).get('/api/test/2');
    expect(response.status).toEqual(200);
  });

  it('should return status code not found', async () => {
    const response = await request(app).get('/api/test/1');
    expect(response.status).toEqual(404);
  });
});
