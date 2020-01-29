const TIMEOUTS = {
  GLOBAL: 20e3
};

const config = {
  baseURL: null,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    authorization:
      " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGVvIiwicGFzcyI6ImNvbnRyYXNlw7FhIiwiaWF0IjoxNTgwMTM2ODc0LCJleHAiOjE1ODEwMDA4NzR9.n2XrfHgfFNvWt-R-FGlY8xUtSeQ-FyKUXN0-tGcCOnk"
  },

  timeout: TIMEOUTS.GLOBAL
};

export { TIMEOUTS };

export default config;
