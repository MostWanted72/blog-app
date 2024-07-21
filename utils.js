exports.swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
          title: 'Library API',
          version: '1.0.0',
          description: 'A simple Express Library API',
          contact: {
            name: 'Developer',
            email: 'developer@example.com'
          },
          servers: [
            {
              url: 'http://localhost:3000',
              description: 'Development server'
            }
          ]
        }
    },
    apis: ['./routes/*.js']
}