import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Shows } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Shows.create(body)
    .then((shows) => shows.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Shows.find(query, select, cursor)
    .then((shows) => shows.map((shows) => shows.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Shows.findById(params.id)
    .then(notFound(res))
    .then((shows) => shows ? shows.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Shows.findById(params.id)
    .then(notFound(res))
    .then((shows) => shows ? _.merge(shows, body).save() : null)
    .then((shows) => shows ? shows.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Shows.findById(params.id)
    .then(notFound(res))
    .then((shows) => shows ? shows.remove() : null)
    .then(success(res, 204))
    .catch(next)
