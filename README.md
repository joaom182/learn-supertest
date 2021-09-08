# Installing

```
yarn add supertest -D
```

# Bootstrapping the app

app.ts
```typescript
import express, { Request, Response } from 'express';
import 'dotenv/config';

const app = express();
app.use(express.json());
app.get('/api/test/:id', (req, res) => { res.send({ ok: req.params.id }) });

export { app };
```

server.ts
```typescript
import { app } from './app';
const PORT = process.env.PORT || 7004;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
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