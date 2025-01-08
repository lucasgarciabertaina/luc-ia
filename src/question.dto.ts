import { ApiProperty } from '@nestjs/swagger';

export class AskQuestionDto {
  @ApiProperty({
    description: 'The question to ask Lucía',
    example: 'What is the weather like today?',
  })
  question: string;
}
