const BASE_URL = 'http://localhost:8080/api/v1/employees'
const headers = { 'Content-Type': 'application/json'}

const EmployeeService = {
    getEmployees: () => fetch(BASE_URL).then(r => r.json()),

    getEmployeeById: (id) =>
        fetch(`${BASE_URL}/${id}`).then(r => {
            if (!r.ok) throw new Error('Employee not found');
            return r.json();
        }),
    
    createEmployee: (employee) =>
        fetch(BASE_URL, {
            method: 'POST', headers,
            body: JSON.stringify(employee)
        }).then(r => r.json()),

    updateEmployee: (id, employee) =>
        fetch(`${BASE_URL}/${id}`, {
            method: 'PUT', headers,
            body: JSON.stringify(employee)
        }).then(r => r.json()),

    deleteEmployee: (id) =>
        fetch(`${BASE_URL}/${id}`, {method: 'DELETE'})
}

export default EmployeeService;