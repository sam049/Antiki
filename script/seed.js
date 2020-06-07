'use strict'

const db = require('../server/db')
const {User, Item} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'bortzork@gmail.com',
      password: 'lobster21',
      isAdmin: true
    })
  ])

  const items = await Promise.all([
    Item.create({
      name: 'test',
      description: 'DESC HOMEPAGE',
      location: 'homepage',
      imageURL: 'wwww.test.com',
      status: 'Active'
    }),
    Item.create({
      name: 'test',
      description: 'DESC HOMEPAGE1',
      location: 'homepage',
      imageURL: 'wwww.test.com',
      status: 'Active'
    }),
    Item.create({
      name: 'test',
      description: 'DESC HISTORY',
      location: 'history',
      imageURL: 'wwww.test.com',
      status: 'Active'
    }),
    Item.create({
      name: 'test',
      description: 'DESC HISTORY1',
      location: 'history',
      imageURL: 'wwww.test.com',
      status: 'Active'
    }),
    Item.create({
      name: 'test',
      description: 'DESC TARGETS',
      location: 'targets',
      imageURL: 'wwww.test.com',
      status: 'Active'
    }),
    Item.create({
      name: 'test',
      description: 'DESC GALLERY',
      location: 'gallery',
      imageURL: 'wwww.test.com',
      status: 'Active'
    }),
    Item.create({
      name: 'test',
      description: 'DESC GALLERY1',
      location: 'gallery',
      imageURL: 'wwww.test.com',
      status: 'Active'
    })
  ])

  console.log(`seeded ${users.length} users and ${items.length} items`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
