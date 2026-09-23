# Understanding the spread opetator

```js

//Initial State
const state = {
  cartItems: [
    { id: 1, name: "Shoes", price: 50 }
  ],
  total: 50,
}

// And you're adding this item:
const item = {
  id: 2,
  name: "Shirt",
  price: 30,
}

const newState = {...state, cartItems: [...state.cartItems,{ ...item }]}

console.log(newState)
// output
{
    "cartItems": [
        {
            "id": 1,
            "name": "Shoes",
            "price": 50
        },
        {
            "id": 2,
            "name": "Shirt",
            "price": 30
        }
    ],
    "total": 50
}

```
