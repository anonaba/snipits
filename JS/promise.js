//############################# For experiment
async function test() {
  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(json => console.log(json))

  console.log('A')
   await new Promise((res) => setTimeout(() => console.log('hey'), 1000)) // this isnt resolve so consolog b wont print
  
   // const ress = await new Promise((res) => setTimeout(() => res('resolve'), 1000)) // it will log B when return the ress variable
   // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1') it will log b
   console.log('B')

  //return ress
}


test().then(message => console.log(message))
console.log('C')
