import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { connectMongoose } from './configs/mongoose.config';
import { ContactsModule } from './clients/contacts.module';
@Module({
  imports: [MongooseModule.forRoot(connectMongoose.uri), ContactsModule],
  providers: [],
})
export class AppModule {}
