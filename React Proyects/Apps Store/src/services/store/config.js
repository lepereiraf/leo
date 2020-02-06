const METHODS = {
  apps: {
    getApps: "GET",
    getOneApp: "GET",
    getName: "GET",
    postApp: "POST",
    delApp: "DELETE",
    putApp: "PUT"
  }
};

const URLS = {
  apps: {
    getApps: "all",
    getOneApp: "getapps",
    getName: "getname",
    postApp: "add",
    delApp: "delete",
    putApp: "update"
  }
};

export { METHODS, URLS };
