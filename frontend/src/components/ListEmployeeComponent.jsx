import {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

export default function ListEmployeeComponent(){
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    const loadEmployees = () => {
        EmployeeService.getEmployees().then(setEmployees);
    };

    useEffect(() => {loadEmployees();}, []);

    const deleteEmployee = (id) => {
        if(!confirm('Delete this employee?')) return;
        EmployeeService.deleteEmployee(id).then(loadEmployees);
    };

    return(
        <div className="page">
            <h2>Employees</h2>
            <Link to="/add-employee/_add" className="add-btn">+ Add Employee</Link>
            <table>
                <thead>
                    <tr>
                        <th>#</th><th>First Name</th><th>Last Name</th>
                        <th>Email</th><th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp, i) => (
                        <tr key={emp.id}>
                            <td>{i + 1}</td>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.emailId}</td>
                            <td>
                                <button onClick={() => navigate(`/view-employee/${emp.id}`)}>View</button>
                                <button onClick={() => navigate(`/add-employee/${emp.id}`)}>Edit</button>
                                <button className="btn-danger" onClick={() => deleteEmployee(emp.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}