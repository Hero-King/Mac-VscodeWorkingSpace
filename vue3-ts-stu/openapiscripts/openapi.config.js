const { generateService } = require('@umijs/openapi');

const projectName = 'ems-oc';

generateService({
	schemaPath: 'http://onex-gateway.cloudos.svolt.cn/v3/api-docs/' + projectName,
	serversPath: './openapitype/umi',
	projectName,
	apiPrefix: `"/${projectName}"`,
	requestLibPath: "import request from '/@/utils/request';",
	/** 不指定的话 生成的请求接口中返回值类型声明就是接口返回值格式 指定的话接口中返回值类型 是 data中的格式*/
  // dataFields: ['data', 'msg', 'code'],
});