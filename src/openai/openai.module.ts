import { Module } from '@nestjs/common';
import { OpenAIService } from './openai.service';
import { OpenAIProvider } from './openai.provider';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [OpenAIService, OpenAIProvider],
  exports: [OpenAIService],
})
export class OpenaiModule {}
