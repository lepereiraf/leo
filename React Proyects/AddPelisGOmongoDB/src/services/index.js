import { isCancel, CancelToken } from "apisauce";

import createExampleApi from "./example";
import movieAPI from "./peliculasGo";
import { TIMEOUTS } from "./config";

const exampleApi = createExampleApi();
const movieApi = movieAPI();

export { CancelToken, isCancel, exampleApi, movieApi, TIMEOUTS };
