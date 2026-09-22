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

# Running Parallel Promises:



Promise.all()

Notes: If any of the promises is rejected that promise that finaly promise that is return from promise that all is considered rejected
If one failed promise in Promise.all it means all promise will be failed
```js

const p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        reject(new Error('Because something failed'))
    }, 2000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2);
    }, 2000);
});

Promise.all([p1, p2])
  .then(result => console.log(result))
  .catch(error => console.log('Error', error.message))

//output
Async operation 1...
Async operation 2...
[ 1, 2 ]

```
Promise.race()

Notes:

Sometimes when want to kick a multiple asynchronous operations but you wanna do something as soon as one of this asynchronous operations completes so you don wanna wait for all of them to complete we just want to do something as soon as the first operation completes if that the case we use Promise.race()

As soon one promise is full-filled in the Promise.race([p1, p2]) the promise is returned from this race() method will be considered full-filled
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

Promise.race([p1, p2])
  .then(result => console.log(result))
  .catch(error => console.log('Error', error.message))

//output
Async operation 1...
Async operation 2...
1 // not array of result instead the value of the first full-filled promise
```

async/await
```js
// Mock functions to make the code fully executable
function getUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: id, gitHubUsername: 'mosh' });
        }, 1000);
    });
}

function getRepositories(username) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['repo1', 'repo2', 'repo3']);
        }, 1000);
    });
}

function getCommits(repo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['commit1', 'commit2']);
        }, 1000);
    });
}

// ==========================================
// Code from the image
// ==========================================

// Promise-based approach
getUser(1)
  .then(user => getRepositories(user.gitHubUsername))
  .then(repos => getCommits(repos[0]))
  .then(commits => console.log('Commits', commits))
  .catch(err => console.log('Error', err.message));

// Async and Await approach
async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (err) {
    console.log('Error', err.message);
  }
}
displayCommits();



```
