import { OpenAIService } from './openai/openai.service';
import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { AnswerResponseDto } from './answer.dto';

@Controller('lucia')
export class AppController {
  constructor(private readonly OpenAIService: OpenAIService) {}

  @Post('/ask')
  async getAnswer(@Body() body): Promise<AnswerResponseDto> {
    const answer = await this.OpenAIService.getAnswer(body.question);
    return new AnswerResponseDto(HttpStatus.OK, 'Success', answer);
  }
}
