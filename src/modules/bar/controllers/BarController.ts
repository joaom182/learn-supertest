import { Request, Response } from 'express';

class BarController {
  index(req: Request, res: Response) {
    if (!req.params.id || parseInt(req.params.id) !== 2) {
      res.status(404).send({ error: true });
      return;
    }
    res.send({ ok: 1 });
  }
}

export default BarController;
