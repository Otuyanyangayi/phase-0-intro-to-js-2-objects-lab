// Write your solution in this file!
const employee = {
    name: "Joy Otuya",
    streetAdress: "church road"

}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const object1 = { ...employee }
    object1[key] = value;
    return object1;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;

}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}