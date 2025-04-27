const companyController = require('../controller').company;
const employeeController = require('../controller').employee;

module.exports = (app)=>{
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Todos API!',
      }));
    
      app.post('/api/company', companyController.create);
      app.get('/api/company', companyController.list);
      app.get('/api/company-list', companyController.listInside);
      app.get('/api/company-id/:id', companyController.retrieve);
      app.put('/api/company/:id', companyController.update);
      app.delete('/api/company/:id', companyController.destroy);


      app.post('/api/employee/:companyId', employeeController.create);
      app.put('/api/employee/:companyId/employeid/:id', employeeController.update);
      app.delete('/api/employee/:companyId/employeid/:id', employeeController.destroy);
      
      
    
}