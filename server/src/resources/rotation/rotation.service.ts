import { iRotation, IRotationModel } from './rotation.interface';
import RotationModel from './rotation.model';

class RotationService {
  private rotation = RotationModel;

  public async create(title: string, user: string, rotation: iRotation, rating: number): Promise<IRotationModel> {
    try {
      const newRotation = await this.rotation.create({ title, user, rotation, rating });
      return newRotation;
    } catch (error) {
      throw new Error('Unable to create rotation');
    }
  }
}

export default RotationService;
