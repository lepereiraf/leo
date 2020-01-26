import { isCancel, CancelToken } from "apisauce";

import createExampleApi from "./example";

import productApi from "./product";

import { TIMEOUTS } from "./config";

const exampleApi = createExampleApi();
const productAPI = productApi();
export { CancelToken, isCancel, exampleApi, productAPI, TIMEOUTS };
