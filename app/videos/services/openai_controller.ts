import env from '#start/env'
import { OpenAI } from 'openai'

export class OpenAIService {
  #openai!: OpenAI

  constructor() {
    this.#openai = new OpenAI({
      apiKey: env.get('OPENAI_API_KEY'),
    })
  }

  async message(input: string) {
    const completion = await this.#openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'system', content: `You are a helpful assistant.` }],
    })

    console.log('response', completion.choices[0])

    return null
  }
}
