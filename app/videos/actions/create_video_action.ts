import { inject } from '@adonisjs/core'
import { OpenAIService } from '#videos/services/openai_controller'

interface CreateVideoActionParams {
  input: string
}

@inject()
export default class CreateVideoAction {
  constructor(private openai: OpenAIService) {}

  async execute(params: CreateVideoActionParams) {
    const { input } = params

    this.openai.message(input)

    return null
  }
}
