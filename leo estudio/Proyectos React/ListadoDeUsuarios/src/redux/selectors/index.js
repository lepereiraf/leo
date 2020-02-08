import { get } from "lodash";

export const personResults = state =>
  get(state, "person.personResults.results");
