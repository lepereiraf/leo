import { isCancel, CancelToken } from "apisauce";

import createExampleApi from "./example";
import createApiApps from "./store";
import { TIMEOUTS } from "./config";

const exampleApi = createExampleApi();
const storeApi = createApiApps();

export { CancelToken, isCancel, exampleApi, storeApi, TIMEOUTS };
