import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContactDocument = Contact & Document;

@Schema({ timestamps: true })
export class Contact {
  @Prop()
  name: string;

  @Prop()
  phone?: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
