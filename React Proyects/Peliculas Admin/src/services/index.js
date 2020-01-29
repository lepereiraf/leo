import { isCancel, CancelToken } from "apisauce";

import createExampleApi from "./example";
import moivieService from "./peliculas";
import { TIMEOUTS } from "./config";

const exampleApi = createExampleApi();
const movieAPI = moivieService();

export { CancelToken, isCancel, exampleApi, movieAPI, TIMEOUTS };
