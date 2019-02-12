const { list, getById, save, update, exclude } = require('../../repository/company');
var companyController = {};

companyController.list = function(req, res) {    
  list().then(result => {
    res.render("../views/company/index", { company: result, title: "Company List"});
  });
};

companyController.edit = function(req, res) {
  getById(req.params.id).then(result => {
    res.render("../views/company/edit", { company: result, title: "Edit Company"});
  });
};

companyController.create = function(req, res) {
    res.render("../views/company/create", {title: "Create New Company"});
};

companyController.save = function(req, res) {
    save(req.body).then(result => {
      res.redirect("/company", { title: "Company List" }, true);
    }).catch((err) => {
      console.log(err)
      res.render("../views/company/create", {title: "Create New Company"});
    });
};

companyController.update = function(req, res) {
  update(req.params.id, req.body).then(() => {
    res.redirect("/company", { title: "Company List" }, true);
  }).catch((err) => {
    console.log(err);
  });
};

companyController.delete = function(req, res) {
    exclude(req.params.id).then(() => {
      res.redirect("/company", { title: "Company List" }, true);
    }).catch((err) => {
      console.log(err);
    });
};

module.exports = companyController;
