import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  stages: [
    { duration: '2m', target: 100 },
    { duration: '2m', target: 250 },
    { duration: '2m', target: 500 },
    { duration: '2m', target: 1000 },
    { duration: '2m', target: 1500 },
    { duration: '2m', target: 500 },
    { duration: '2m', target: 100 },
  ]
}

export default function () {
  const BASE_URL = 'http://localhost:3000';
  const listingid = Math.floor(Math.random()*399999) + 1;
  let responses = http.batch([
    [
      'GET',
      `${BASE_URL}/api/${listingid}/reviews`,
      null,
      { tags: { name: 'getReviewsURL'}},
    ],
  ]);
  sleep(1);
}