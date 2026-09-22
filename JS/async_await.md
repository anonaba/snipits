# Callback Hell Sample
```js
console.log('before')
getUserId(1, function(user) {
  console.log('User',user)
  
  getRepo(user.gitHubUsername, function(repo) {
     console.log('Repo', user.gitHubUsername, repo)
  })
})

console.log('after')


  
function getUserId(id,cb) {
    setTimeout(() => {
      console.log('Readin a user from a database')
      cb({id,gitHubUsername: 'dove'})
  
    },2000)

}


function getRepo(username, cb) {

   setTimeout(() => {
      console.log('Calling github api ' + username)
      cb(['repo1', 'repo2', 'repo3'])
  
    },2000)
 
}

```
Promise
```js
const p = new Promise((resolve,reject)=> {
  // resolve(1)

  reject(new Error('Error message'))
})

p
  .then(res => console.log(res))
  .catch(error => console.log(error.message))
```
Promise API: Creating Settled Promise

Sometimes  you want to create a promise that is already resolve this is particularly useful when writing unit test you want to simulate a scenario where a asynchronous operation like calling a web service completes successfully. In your unit test you want to create a promise that is already resolve
```js
const p = Promise.resolve({id:1})

p.then(result => console.log(result))


const p1 = Promise.reject(new Error('Error Message here'))

p1.catch(error => console.log(error.message)) //return the error object with message property and a call stack that is available to error object
```

Running Parallel Promises:
```js

const p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        resolve(1);
    }, 2000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2);
    }, 2000);
});

Promise.all([p1, p2]).then(result => console.log(result))

//output
Async operation 1...
Async operation 2...
[ 1, 2 ]

```
