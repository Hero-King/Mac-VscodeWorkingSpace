const OpenAPI = require('openapi-typescript-codegen')

OpenAPI.generate({
  input: 'http://onex-gateway.cloudos.svolt.cn/v3/api-docs/ems-oc',
  output: './openapitype/codegen',
  httpClient: 'axios',
//   exportCore: false,
//   exportServices: false,
})
