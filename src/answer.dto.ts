import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class AnswerResponseDto {
  @ApiProperty({ description: 'HTTP status code' })
  statusCode: HttpStatus;

  @ApiProperty({ description: 'Indicates if the response is successful' })
  message: string;

  @ApiProperty({ description: `Lucia's answer` })
  data?: string;

  constructor(statusCode: HttpStatus, message: string, data?: string) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}
