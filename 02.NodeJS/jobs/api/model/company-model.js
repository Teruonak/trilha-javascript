'use strict';
const companies = [];
class Company {
  constructor(name, segment, email, site, city, tecnologies) {
    this.name = name;
    this.segment = segment;
    this.email = email;
    this.site = site;
    this.city = city;
    this.tecnologies = tecnologies;
  }
  save() {
    companies.push(this);
  }

  update() {
    companies[this.id] = this;
  }

  static get(name) {
    if(name) {
      return companies.filter(
        (company) => company.name.toLowerCase().startsWith(name.toLowerCase())
      );
    }
    return companies;
  }
}
module.exports = Company;
