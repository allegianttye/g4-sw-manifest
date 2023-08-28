let DateGenerator = require('random-date-generator');
const Fakerator = require("fakerator");
let fakerator = Fakerator();
const createCustomer = () => {
    const {
        firstName,
        lastName,
        dob,
        email,
        address,
        phone,
        status,
    } = fakerator.entity.user()

    return {
        firstName,
        lastName,
        dob,
        email,
        address,
        phone,
        checkin: status
    }
}

const create = () => {
    const CUST_AMOUNT = 100;
    const customerCollection = [];
    for (let i=0; i < CUST_AMOUNT; i++) {
        customerCollection.push(createCustomer())
    }
    console.log(customerCollection);
    return customerCollection;
}

module.exports = {
    create,
}