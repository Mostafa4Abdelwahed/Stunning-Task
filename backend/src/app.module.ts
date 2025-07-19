import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IdeasModule } from './ideas/ideas.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    IdeasModule,
  ],
})
export class AppModule {}