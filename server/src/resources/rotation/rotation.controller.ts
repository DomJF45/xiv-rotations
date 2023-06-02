import { Router, Request, Response, NextFunction } from 'express';
import { Controller } from '@/utils/interfaces/controller.interface';
import HttpException from '@/utils/exceptions/http.exception';
import validationMiddleware from '@/middleware/validation.middleware';
import validate from '@/resources/rotation/rotation.validation';
import RotationService from '@/resources/rotation/rotation.service';

class RotationController implements Controller {
  public path = '/rotations';
  public router = Router();
  public RotationService = new RotationService();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(`${this.path}`, this.create);
  }

  private create = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
      const { title, user, rotation, rating } = req.body;
      const post = await this.RotationService.create(title, user, rotation, rating);
      res.status(201).json({ post });
    } catch (error) {
      next(new HttpException(400, 'Cannot Create Rotation Post'));
    }
  };
}

export default RotationController;
