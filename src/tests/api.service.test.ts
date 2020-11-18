import { getTodos } from '../services/api.service'

describe('apiService', () => {

  it('should get 3 todos', async () => {
    //when
    const result = await getTodos()
    //then
    expect(result).toHaveLength(3)
  })

  const sum = (a: number, b: number) => a + b
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  
})
