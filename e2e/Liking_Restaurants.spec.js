const assert = require('assert')

Feature('Liking Restaurants')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

const nothingRestaurant = 'You dont have a Restaurant Favorite'

Scenario('showing empty favorite restaurant', async ({ I }) => {
  I.seeElement('#favorite-restaurant')
  I.see(nothingRestaurant, '#favorite-restaurant')
})

Scenario('like one restaurant', async ({ I }) => {
  I.see(nothingRestaurant, '#favorite-restaurant')

  I.amOnPage('/')

  // mencari tautan di class body-card-element dan masuk ke detail
  I.seeElement('.body-card-element a')
  const firstRestaurant = locate('.body-card-element a').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  // mencari button dan klik button like di halaman detail
  I.seeElement('#likeButton')
  I.click('#likeButton')

  // balik ke halaman favorite dan mencari body-card-element
  I.amOnPage('/#/favorite')
  I.seeElement('.body-card-element')
  const favoriteRestaurantButton = await I.grabTextFrom('.body-card-element a')

  assert.strictEqual(firstRestaurantTitle, favoriteRestaurantButton)
})

Scenario('unlike restaurant', async ({ I }) => {
  I.see('You dont have a Restaurant Favorite', '#favorite-restaurant')

  I.amOnPage('/')

  // mencari tautan di class body-card-element dan masuk ke detail
  I.seeElement('.body-card-element a')

  const firstRestaurant = locate('.body-card-element a').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  // menacri button dan klik like di halaman detail
  I.seeElement('#likeButton')
  I.click('#likeButton')

  // kembali ke hal favorite
  I.amOnPage('/#/favorite')
  I.seeElement('.body-card-element')
  const favoriteRestaurantButton = await I.grabTextFrom('.body-card-element a')

  assert.strictEqual(firstRestaurantTitle, favoriteRestaurantButton)

  // mengklik tautan di class body-card-element dan masuk kembali ke detail
  I.click(firstRestaurantTitle)

  // mencari dan unlike button favorite di halaman detail
  I.seeElement('#likeButton')
  I.click('#likeButton')

  // kembali ke halaman favorite
  I.amOnPage('/#/favorite')
  I.seeElement('#favorite-restaurant')
  const favoriteRestaurantTitle = await I.grabTextFrom('#favorite-restaurant')

  assert.strict(nothingRestaurant, favoriteRestaurantTitle)
})

Scenario('Review', async ({ I }) => {
  // mencari id favorite-restaurant
  I.see(nothingRestaurant, '#favorite-restaurant')

  // kembali ke halaman utama
  I.amOnPage('/')

  // mencari tautan dan klik di class body-card-element
  I.seeElement('.body-card-element a')
  I.click(locate('.body-card-element a').first())

  // mencari form di form-review
  I.seeElement('.form-review form')

  // menginput fill name dan review
  I.fillField('addName', 'Kia')
  const review = 'Skuy! Tempatnya Keren'
  I.fillField('addComment', review)

  // klik button comment
  I.click('#button-comment')

  // menyamakan text
  const newReview = locate('.review-body-comment span').last()
  const textReview = await I.grabTextFrom(newReview)

  assert.strictEqual(review, textReview)
})
