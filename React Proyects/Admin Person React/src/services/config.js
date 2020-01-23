const TIMEOUTS = {
  GLOBAL: 20e3
};

const config = {
  baseURL: null,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGVvIiwicGFzcyI6ImNvbnRyYXNlw7FhIiwiaWF0IjoxNTc5NjMwOTQyLCJleHAiOjE1ODA0OTQ5NDJ9.nev1Ew6Y9eJJSW4RgRlRAkq8qd338JijIXt0EUfYarg"
  },
  timeout: TIMEOUTS.GLOBAL
};

export { TIMEOUTS };

export default config;
