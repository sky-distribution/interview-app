import { getTodos } from '../services/api.service'

describe('apiService', () => {

  it('should get 3 todos', async () => {
    //when
    const result = await getTodos()
    //then
    expect(result).toHaveLength(3)
  })
})
