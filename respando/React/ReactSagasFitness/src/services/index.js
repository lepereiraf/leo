import { isCancel, CancelToken } from "apisauce";

import createExampleApi from "./example";
import ejercicioApi from "./ejercicio";
import { TIMEOUTS } from "./config";

const exampleApi = createExampleApi();

const ejercicioAPI = ejercicioApi();

export { CancelToken, isCancel, exampleApi, TIMEOUTS, ejercicioAPI };
