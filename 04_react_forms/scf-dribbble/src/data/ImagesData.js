import { faker } from '@faker-js/faker'

export const createFakeImageData = () => {

  const allTags = [
    'Animation',
    'Branding',
    'Illustration',
    'Mobile',
    'Print',
    'Product',
    'Typography',
    'Web Design',
  ]

  const fiftyRandomImageObjs = new Array(50).fill({}).map(() => ({
    user: faker.internet.userName(),
    img_url: faker.image.abstract(1234, 2345, true),
    tags: faker.helpers.arrayElements(allTags),
    views: Number(faker.random.numeric(3)),
    likes: Number(faker.random.numeric(2))
  }))

  return fiftyRandomImageObjs
}

const ImagesArray = createFakeImageData();

export default ImagesArray