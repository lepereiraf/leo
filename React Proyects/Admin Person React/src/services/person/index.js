import buildApi from "../api";
import { URLS } from "./config";

const createApi = () => {
  const { setBaseURL, get, post, delete: del, put } = buildApi();

  const urlBase = "http://localhost:3011/person/";

  setBaseURL(urlBase);

  const personService = {
    getPersons: (id, config = {}) =>
      get(`${URLS.person.getPerson}`, {}, config),
    getOnePersons: (id, config = {}) =>
      get(`${URLS.person.getOnePerson}/${id}`, id, config),
    postPersons: (data, config = {}) =>
      post(`${URLS.person.postPerson}`, data, config),
    delPersons: (id, config = {}) =>
      del(`${URLS.person.delPerson}/${id}`, {}, config),
    putPersons: (id, data, config = {}) =>
      put(`${URLS.person.updatePerson}/${id}`, data, config)
  };

  return { personService };
};

export default createApi;
