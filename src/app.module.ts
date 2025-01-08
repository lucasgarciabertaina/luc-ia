import { OpenaiModule } from './openai/openai.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenAIService } from './openai/openai.service';
import { ConfigModule } from '@nestjs/config';
import { OpenAIProvider } from './openai/openai.provider';
@Module({
  imports: [
    OpenaiModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, OpenAIService, OpenAIProvider],
})
export class AppModule {}
