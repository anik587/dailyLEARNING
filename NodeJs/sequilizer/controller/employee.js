const { employee } = require('.');

const Employee = require('../database/models').Employee;

module.exports = {
  create(req, res) {
    return Employee
      .create({
        name: req.body.name,
        designation: req.body.designation,
        salary: req.body.salary,
        companyId: req.params.companyId,
      })
      .then(employee => res.status(201).send(employee))
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Employee
      .find({
          where: {
            id: req.params.id,
            companyId: req.params.companyId,
          },
        })
      .then(employee => {
        if (!employee) {
          return res.status(404).send({
            message: 'TodoItem Not Found',
          });
        }
  
        return employee
          .update({
            name: req.body.name || todoItem.name,
            designation: req.body.designation || todoItem.designation,
            salary: req.body.salary || todoItem.salary,
          })
          .then(updatedemployee => res.status(200).send(updatedemployee))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  
  destroy(req, res) {
    return Employee
      .find({
          where: {
            id: req.params.id,
            companyId: req.params.companyId,
          },
        })
      .then(employee => {
        if (!employee) {
          return res.status(404).send({
            message: 'Employee Not Found',
          });
        }
  
        return employee
          .destroy()
          .then(() => res.status(200).send({
              message: 'Employee deleted'
          }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};