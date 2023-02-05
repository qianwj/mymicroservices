import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MydataModule} from "./mydata/mydata.module";

@Module({
  imports: [MydataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
