// @flow

const API_BASE_URI = "https://jsonplaceholder.typicode.com";

export const helloWorld = "Hello World";

export const sum = (a: number, b: number) => {
  return a + b;
};

export const simpleObject = {
  a: 4,
  b: 3
};

export const simpleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const staticPromise = Promise.resolve("9");

export const fetchPost = (postId: string) => fetch(`${API_BASE_URI}/posts/${postId}`);

export const fetchCommentsForPost = (postId: string) => {
  if (Math.random() > 0.1) {
    return Promise.reject(new Error("some error"));
  } else {
    return fetch(`${API_BASE_URI}/posts/${postId}/comments`);
  }
};

type Job = () => Promise<Response>
type SequenceType = Array<Job> => Promise<Array<Response>>
export const sequence: SequenceType = ([firstJob, ...restJobs]) => {
  const firstJobResponse = firstJob();
  const responses = [];

  return restJobs
      .reduce(
        (jobSoFar, nextJob) =>
          jobSoFar.then(response => {
            responses.push(response);
            return nextJob();
          }),
        firstJobResponse
      )
      .then(() => responses);
};

export default function() {
  console.log("default function invoked");
};