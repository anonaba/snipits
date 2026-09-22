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
