import { Injectable } from '@nestjs/common';
import { OpenAIProvider } from './openai.provider';

@Injectable()
export class OpenAIService {
  constructor(private readonly openAIProvider: OpenAIProvider) {}

  async getAnswer(question: string): Promise<string> {
    const client = this.openAIProvider.getClient();
    const response = await client.chat.completions.create({
      messages: [{ role: 'user', content: question }],
      model: 'gpt-4',
    });

    const [firstChoice] = response.choices;
    return firstChoice.message.content;
  }
}
