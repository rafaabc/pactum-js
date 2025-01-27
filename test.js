// test.js
const { allure } = require('allure-mocha/runtime');
const { spec } = require('pactum');

it('should get a response with status code 200', async () => {
  allure.epic("Users"),
  allure.feature("Change user"),
  allure.story("Change user by ID"),
  await spec()
    .get('http://httpbin.org/status/200')
    .expectStatus(200);
});
