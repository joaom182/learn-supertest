# Installing

```
yarn add supertest -D
```

# Testing

```typescript
import request from 'supertest';
import { app } from 'path/to/your/app';

describe('BarController integration tests', () => {
  it('should return status code ok', async () => {
    const response = await request(app).get('/api/test/2');
    expect(response.status).toEqual(200);
  });
});
```

> Heads up: don't start listen for a port on your `app.ts`, let this to be done for `server.ts`