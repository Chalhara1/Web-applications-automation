import { Selector } from "testcafe";
import { faker } from '@faker-js/faker';

const firstName = faker.name.firstName(); // Rowan 
const lastName = faker.name.lastName(); // Nikolaus
const zipCode = faker.address.zipCode(); // 54862-4567

fixture("Session").page("https://www.saucedemo.com")
.before(async t =>{
  //Test setup goes here
  //await rundatabaseReset()
  //await seedTestData()
})
.beforeEach(async t => {
  await t.setTestSpeed(0.1)//set testing speed
})
.after(async t =>{
  //cleaning test data
  //Logging and sending data to monitoring systems
})
.afterEach(async t =>{
  //Runs after each test
})


test("Test", async (t) => {

  await t
  //<--login start-->
    .typeText("#user-name", "performance_glitch_user")
    .typeText("#password", "secret_sauce")
    .click("#login-button")
  //<--login end-->
 


  //<--check product and price start-->
    .expect(Selector('.inventory_item_name').withText('Sauce Labs Fleece Jacket').exists)
    .ok()
    .expect(Selector('.inventory_item_price').withText('49.99').exists)
    .ok()
  //<--check product and price end-->



  //<--select product to cart start-->
    .click("#add-to-cart-sauce-labs-backpack")
    .click("#add-to-cart-sauce-labs-bolt-t-shirt")
  //<--select product to cart end-->

 

  //<--Add product to cart start-->
    .click("#shopping_cart_container")
  //<--Add product to cart end-->

  //<--Check again aded products start-->
    .expect(Selector('.inventory_item_name').withText('Sauce Labs Backpack').exists)
    .ok()
    .expect(Selector('.inventory_item_name').withText('Sauce Labs Bolt T-Shirt').exists)
    .ok()
  //<--Check again aded products end-->



  //<--Order checkout start-->
    .click("#checkout")
  //<--Order checkout end-->

  //<--Add Shipping data start-->
    .typeText("#first-name", firstName)
    .typeText("#last-name", lastName)
    .typeText("#postal-code", zipCode)
  //<--Add Shipping data End-->

    .click("#continue")
    .click("#finish")
});