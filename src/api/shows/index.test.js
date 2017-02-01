import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Shows } from '.'

const app = () => express(routes)

let shows

beforeEach(async () => {
  shows = await Shows.create({})
})

test('POST /shows 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ id: 'test', name: 'test', img: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.img).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /shows 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /shows/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${shows.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(shows.id)
})

test('GET /shows/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /shows/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${shows.id}`)
    .send({ id: 'test', name: 'test', img: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(shows.id)
  expect(body.id).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.img).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /shows/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ id: 'test', name: 'test', img: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /shows/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${shows.id}`)
  expect(status).toBe(204)
})

test('DELETE /shows/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
