import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Shows, { schema } from './model'

const router = new Router()
const { id, name, img, description } = schema.tree

/**
 * @api {post} /shows Create shows
 * @apiName CreateShows
 * @apiGroup Shows
 * @apiParam id Shows's id.
 * @apiParam name Shows's name.
 * @apiParam img Shows's img.
 * @apiParam description Shows's description.
 * @apiSuccess {Object} shows Shows's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Shows not found.
 */
router.post('/',
  body({ id, name, img, description }),
  create)

/**
 * @api {get} /shows Retrieve shows
 * @apiName RetrieveShows
 * @apiGroup Shows
 * @apiUse listParams
 * @apiSuccess {Object[]} shows List of shows.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /shows/:id Retrieve shows
 * @apiName RetrieveShows
 * @apiGroup Shows
 * @apiSuccess {Object} shows Shows's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Shows not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /shows/:id Update shows
 * @apiName UpdateShows
 * @apiGroup Shows
 * @apiParam id Shows's id.
 * @apiParam name Shows's name.
 * @apiParam img Shows's img.
 * @apiParam description Shows's description.
 * @apiSuccess {Object} shows Shows's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Shows not found.
 */
router.put('/:id',
  body({ id, name, img, description }),
  update)

/**
 * @api {delete} /shows/:id Delete shows
 * @apiName DeleteShows
 * @apiGroup Shows
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Shows not found.
 */
router.delete('/:id',
  destroy)

export default router
