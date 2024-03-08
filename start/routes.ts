/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const CreateVideoController = () => import('#videos/controllers/create_video_controller')

router.on('/').renderInertia('home')

router.post('videos', [CreateVideoController]).as('videos.create')
