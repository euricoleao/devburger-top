import { loadStripe } from '@stripe/stripe-js';

const stripePromise  = loadStripe('pk_test_51Q5UQ0JI9YkLUX2o523XI93EEEIF6B7RJgu0DKhkzfeb3rFjAb9pTR7OnorUHXfj1IPrQAaAuU7XEeHcBl7jLslV00OSHQ3vok');

export default stripePromise;