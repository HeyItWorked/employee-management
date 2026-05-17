import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

export default function ViewEmployeeComponent() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then(setEmployee);
    }, [id]);

    if (!employee) return <p>Loading...</p>;

    return(
        <div className="page">
            <h2>Employee Details</h2>
            <div className="detail-card detail">
                <p><strong>First Name:</strong> {employee.firstName}</p>
                <p><strong>Last Name:</strong> {employee.lastName}</p>
                <p><strong>Email:</strong> {employee.emailId}</p>
            </div>
            <button onClick={() => navigate('/employees')}>Back</button>
        </div>
    )
}