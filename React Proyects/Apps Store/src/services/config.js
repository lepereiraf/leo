const TIMEOUTS = {
  GLOBAL: 20e3
};

const config = {
  baseURL: null,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",

    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGVvIiwicGFzcyI6ImNvbnRyYXNlw7FhIiwiaWF0IjoxNTgwNDc3OTcxLCJleHAiOjE1ODEzNDE5NzF9.NeVvuOHF4WFIHtA626Tp_-YyfaR39eOwkgY2TdjSgcw"
  },
  timeout: TIMEOUTS.GLOBAL
};

export { TIMEOUTS };

export default config;
