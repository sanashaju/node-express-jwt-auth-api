// swagger-autogen.js
import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'REST API',
    description: 'Auto-generated Swagger doc',
  },
  host: 'localhost:9002',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen()(outputFile, endpointsFiles, doc);