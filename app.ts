import './instrumentations';

import express, { Request, Response } from 'express';

const app: express.Application = express();
const port: number = 3000;

app.get('/', (req: Request, res: Response) => {
  res.json('Hello, World!');
});

app.get('/buteco', (req: Request, res: Response) => {
  res.json({ mensagem: 'Bora tomar uma?' });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
  });
}

export default app;
