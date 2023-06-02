import { Schema, model } from 'mongoose';
import { IRotationModel } from '@/resources/rotation/rotation.interface';

const SkillSchema = new Schema({
  name: String,
  icon: String,
  level: Number,
  help_html: String,
  cast_time: String,
  cast_range: String,
  cost: String,
  category: Number,
  radius: Number,
  deprecated: Number,
  c: String,
  gcd: Boolean,
});

const SequenceSchema = new Schema({
  id: String,
  skill: SkillSchema,
});

const rotationSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  rotation: [
    {
      job: String,
      skills: [SequenceSchema],
    },
  ],
  rating: {
    type: Number,
  },
});

export default model<IRotationModel>('RotationModel', rotationSchema);
