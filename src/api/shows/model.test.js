import { Shows } from '.'

let shows

beforeEach(async () => {
  shows = await Shows.create({ id: 'test', name: 'test', img: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = shows.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(shows.id)
    expect(view.id).toBe(shows.id)
    expect(view.name).toBe(shows.name)
    expect(view.img).toBe(shows.img)
    expect(view.description).toBe(shows.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = shows.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(shows.id)
    expect(view.id).toBe(shows.id)
    expect(view.name).toBe(shows.name)
    expect(view.img).toBe(shows.img)
    expect(view.description).toBe(shows.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
