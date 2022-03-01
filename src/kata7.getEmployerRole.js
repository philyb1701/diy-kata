const getEmployerRole = (employeeName, employees) => {
    employeeStats = employees.find((person)=>{
        return person.name === employeeName
    })
    return employeeStats.role
};

module.exports = getEmployerRole;
