const ENVIRONMENTS = {
  URL : "127.0.0.1", // api domain 
  RESOURCE: "127.0.0.1", // for img or file ....
};

export const env = (key) => {
  return  ENVIRONMENTS[key] | ENVIRONMENTS.URL;
}