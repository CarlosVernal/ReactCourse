import { EndPointFact, PrefixApiImg } from '../Apis/CatApi'

export const getRandomFact = async () => {
  const res = await fetch(EndPointFact)
  const data = await res.json()
  const { fact } = data
  return fact
}

export const getRandomImage = async fact => {
  const threeFirstWords = fact.split(' ', 3).join('%20')
  const res = await fetch(
    `${PrefixApiImg}cat/says/${threeFirstWords}?json=true`
  )
  const data = await res.json()
  const { _id } = data
  return `${PrefixApiImg}cat/${_id}/says/${threeFirstWords}`
}
