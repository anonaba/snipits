# Callback Hell Sample
```js
console.log('before')
getUserId(1, function(user) {
  console.log('User',user)
  
  getRepo(function(repo) {
     console.log('Repo',repo)
  })
})

console.log('after')



function getUserId(id,cb) {
    setTimeout(() => {
      console.log('Readin a user from a database')
      cb({id,gitHubUsername: 'dove'})
  
    },2000)

}


function getRepo(cb) {

   setTimeout(() => {
      console.log('Calling github api')
      cb(['repo1', 'repo2', 'repo3'])
  
    },2000)
 
}

```
