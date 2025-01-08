import { ApiProperty } from '@nestjs/swagger';

export class AnswerResponseDto {
  constructor(statusCode: number, message: string, data: string) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }

  @ApiProperty({
    description: 'The HTTP status code of the response',
    example: 200,
  })
  statusCode: number;

  @ApiProperty({
    description: 'A brief message about the response',
    example: 'Success',
  })
  message: string;

  @ApiProperty({
    description: 'The answer provided by Lucía',
    example: 'Here is the answer to your question.',
  })
  data: string;
}
