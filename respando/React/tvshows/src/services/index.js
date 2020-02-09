import { isCancel, CancelToken } from "apisauce";

import createTvShowApi from "./serie";
import { TIMEOUTS } from "./config";

const tvShowApi = createTvShowApi();

export { CancelToken, isCancel, TIMEOUTS, tvShowApi };
