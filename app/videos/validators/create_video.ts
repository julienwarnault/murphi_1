import vine from '@vinejs/vine'

export const createVideoValidator = vine.compile(
  vine.object({
    input: vine.string(),
  })
)
