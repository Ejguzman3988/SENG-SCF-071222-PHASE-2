 # PATCH & DELETE requests

## SWBATs:

- [ ] Observe how to send a PATCH & DELETE request
- [ ] Review changing parent state

## Deliverables

- Review changes to the SCF Dribble app to prepare for editing
- get our ImageEditForm working to persist changes to db.json and to local state
- get the delete button working for Images so it removes the project from db.json and local state
- get the like button working for projects so the number of likes persists to db.json and local state

#### 1. Review changes to the project showcase application

- Review the Get/Post Request

- Review `useEffect`

- Add a edit, delete, and like buttons

#### 2. Submit the edit Image form and make a PATCH request

- Inside of the `ImageForm` component, update `handleSubmit` to include a `PATCH` request

- Include the updated state values in the `PATCH` request

- Update the `images` state in the parent component `App` using the `.map` function

  - The goal is to return a new array with the original Image excluded and the newly updated Image included

- Reset the edit form after submission is complete

#### 3. Click the delete button and make a DELETE request

- Attach an `onClick` event listener to the delete button

- Add a `DELETE` fetch request to the event handler for the delete button

- Update the `images` state in the parent component `App` using the `.filter` function

  - The goal is to return a new array with the deleted Image excluded

#### 4. Click the like button and persist the updated number of likes

- Send a `PATCH` request when the `likes` is updated through a click event

- Update the `Images` state in the parent component `App` using the `.map` function


#### GROUP WORK INSTRUCTIONS
- Create a db.json
- copy data from pokemon.js / digimon.js data to the db.json
  - If you console.log the data from your app it comes back as JSON so you don't have to convert it.
- package.json
- write a `script` that runs the json server
  - `"server": "json-server --watch db.json --port=4000"`
