const { generateApi } = require('swagger-typescript-api');
const path = require('path');
const outputDir = path.resolve(process.cwd(), './openapitype/swaggerTs');

/* NOTE: all fields are optional expect one of `output`, `url`, `spec` */
generateApi({
  // input: path.resolve(__dirname, "./schemas.json"),
  url: 'http://onex-gateway.cloudos.svolt.cn/v3/api-docs/ems-oc',
  output: outputDir,
  modular: true,
  axios: true,
});