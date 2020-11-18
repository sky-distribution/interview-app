import { getTodos, getUsers } from '../services/api.service'

describe('apiService', () => {

  it('should get 3 todos', async () => {
    //when
    const result = await getTodos()
    //then
    expect(result).toHaveLength(3)
  })

  it('should get 3 users', async () => {
    //when
    const result = await getUsers()
    //then
    expect(result).toHaveLength(3)
  })
})
