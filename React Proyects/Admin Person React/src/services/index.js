import { isCancel, CancelToken } from "apisauce";

import createExampleApi from "./example";
import personApi from "./person";
import { TIMEOUTS } from "./config";

const exampleApi = createExampleApi();
const personAPI = personApi();

export { CancelToken, isCancel, exampleApi, personAPI, TIMEOUTS };
