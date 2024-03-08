import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import CreateVideoAction from '#videos/actions/create_video_action'
import { createVideoValidator } from '#videos/validators/create_video'

@inject()
export default class CreateVideoController {
  constructor(private action: CreateVideoAction) {}

  async handle({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createVideoValidator)

    await this.action.execute(payload)

    return response.redirect().back()
  }
}
