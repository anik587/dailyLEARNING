const { company } = require('.');

const Company = require('../database/models').Company;
const Employee = require('../database/models').Employee;

module.exports = {
  create(req, res) {
    return Company
      .create({
        name: req.body.name,
      })
      .then(company => res.status(201).send(company))
      .catch(error => res.status(400).send(error));
  },
  list(req, res){
      return Company
      .findAll()
      .then(company => res.status(200).send(company))
      .catch(error => res.status(400).send(error));

  },
  listInside(req, res) {
    return Company
      .findAll({
        include: [{
          model: Employee,
          as: 'employees',
        }],
      })
      .then(company => res.status(200).send(company))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Company
      .findByPk(req.params.id,{
        include: [{
          model: Employee,
          as: 'employees',
        }],
      })
      .then(company => {
        if (!company) {
          return res.status(404).send({
            message: 'Company not found'
          });
        }
        return res.status(200).send(company);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Company
      .findByPk(req.params.id,{
        include: [{
          model: Employee,
          as: 'employees',
        }],
      })
      .then(company => {
          
        if (!company) {
          return res.status(404).send({
            message: 'Company not found'
          });
        }
    
        return company
          .update({
            name: req.body.name || company.title,
          })
          .then(() => res.status(200).send(company))  // Send back the updated todo.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res){
      return Company
        .findByPk(req.params.id)
        .then(company => {
            if(!company)
            return res.status(404).send({
                message: 'Company not found'
            })

            company
                .destroy()
                .then(() => res.status(200).send({
                    message: 'Company deleted'
                }))
                .catch(error => res.status(500).send(error))
        })
        .catch(error => res.status(500).send(error))
  }
};
