const TIMEOUTS = {
  GLOBAL: 20e3
};

const config = {
  baseURL: null,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZnJhbjIwMjAiLCJwYXNzIjoicGFzc3dvcmQiLCJpYXQiOjE1NzkyNDk5MTUsImV4cCI6MTU3OTY4MTkxNX0.vcHh1aHReAZLCs0es7N-vSRpXvb43b4tfvvnhWy7tJU'
  },
  timeout: TIMEOUTS.GLOBAL
};

export { TIMEOUTS };

export default config;
