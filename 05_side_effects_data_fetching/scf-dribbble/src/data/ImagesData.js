import { faker } from '@faker-js/faker'
// npm install @faker-js/faker --save-dev

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
                              // [{},{},{}] => []
  const fiftyRandomImageObjs = new Array(50).fill({}).map((_, index) => ({
    id: index+1,
    user: faker.internet.userName(),
    img_url: faker.image.abstract(1234, 2345, true),
    tags: faker.helpers.arrayElements(allTags), // returns an array of random elements
    views: Number(faker.random.numeric(3)),
    likes: Number(faker.random.numeric(2))
  }))

  return fiftyRandomImageObjs
}

const ImagesArray = createFakeImageData();

export default ImagesArray