import { getHeroes } from '../services/hero.service'

describe('heroService', () => {

  it('should get 3 heros', () => {
    //when
    const heroes = getHeroes()

    //then
    expect(heroes).toHaveLength(3)
  })
})
