const TIMEOUTS = {
  GLOBAL: 20e3
};

const config = {
  baseURL: null,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGVvIiwicGFzcyI6ImNvbnRyYXNlw7FhIiwiaWF0IjoxNTc5NjMwMjgwLCJleHAiOjE1ODAwNjIyODB9.ySbD4eXr9DoFKTgesLsFfFjomMf3L7dpf5dbrD8IM1I'
  },
  timeout: TIMEOUTS.GLOBAL
};

export { TIMEOUTS };

export default config;
