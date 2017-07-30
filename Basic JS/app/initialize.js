// @flow

import defaultFunc, {
  helloWorld,
  simpleObject,
  simpleArray,
  sum,
  staticPromise,
  fetchPost,
  fetchCommentsForPost,
  sequence
} from "./my-module";

console.log(helloWorld);
defaultFunc();

const {a, b} = simpleObject;
console.log(`Sum of ${a} + ${b} = ${sum(a, b)}`);

console.log(`Sum of a list of integers: ${simpleArray.reduce(sum)}`)

const [...skip2] = simpleArray;
console.log(`Skip first 2 elements of the list: ${skip2.toString()}`);

console.log("Printing all elements of the array: ");
for (let i = 0; i < simpleArray.length; i++) {
  console.log(simpleArray[i]);
}


// How the event loop works: http://voidcanvas.com/wp-content/uploads/2017/02/event-loop.png

// Promises

const postResponse = staticPromise
    .then(fetchPost)
    .then(response => response.json())

const commentResponse = staticPromise
    .then(fetchCommentsForPost)
    .then(
      response => response.json(),
      error => []
    );

const postWithComments = Promise.all([postResponse, commentResponse])
    .then(([post, comments]) => Object.assign({}, post, {comments}));

postWithComments.then(console.log);

// Sequencing promises
const jobs = simpleArray.map(number => () => fetchPost(number.toString()));
sequence(jobs).then(console.log);
// Async / Await

async function myAsyncFunction() {
  const postId = await staticPromise;
  const postResponse = await fetchPost(postId);
  const post = await postResponse.json();
  let comments = [];

  try {
    const commentResponse = await fetchCommentsForPost(postId);
    comments = await commentResponse.json();
  } catch(error) {
    comments = [];
  }

  const postWithComments = Object.assign({}, post, {comments})
  console.log(postWithComments);
}

myAsyncFunction();

/* Additional articles:

http://voidcanvas.com/setimmediate-vs-nexttick-vs-settimeout/
https://ponyfoo.com/articles/understanding-javascript-async-await
https://tc39.github.io/ecmascript-asyncawait/
http://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function/

*/