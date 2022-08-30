import React from 'react'

function ImageItem({ user, likes, views, imgUrl }) {
  return (
    <div className="card">
      <figure>
        <img src={imgUrl} alt={user} width="100px" height="133px"/>
      </figure>
      <section>
        <div>
          <strong>{user}</strong>
        </div>
        <div>Likes: {likes}</div>
        <div>Views: {views}</div>
      </section>
    </div>
  )
}

export default ImageItem

// {
//   "user": "Bonnie.Kerluke",
//   "img_url": "https://loremflickr.com/1234/2345/abstract?48167",
//   "tags": [
//       "Product",
//       "Mobile",
//       "Branding",
//       "Illustration",
//       "Web Design",
//       "Animation"
//   ],
//   "views": 294,
//   "likes": 88
// }