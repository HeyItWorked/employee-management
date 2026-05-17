import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

export default function CreateEmployeeComponent() {
    const {id} = useParams();
    const navigate = useNavigate();
    const isEdit = id !== '_add';

    const [form, setForm] = useState({
        firstName: '', lastName: '', emailId: ''
    })

    useEffect(() => {
        if (isEdit){
            EmployeeService.getEmployeeById(id).then(data =>
                setForm({firstName: data.firstName, lastName: data.lastName, emailId: data.emailId})
            );
        }
    }, [id]);

    const handleChange = (e) =>
        setForm(prev => ({...prev, [e.target.name]: e.target.value}))

    const handleSubmit = (e) => {
        e.preventDefault();
        const action = isEdit
            ? EmployeeService.updateEmployee(id, form)
            : EmployeeService.createEmployee(form)
        action.then(() => navigate('/employees'));
    }
    return(
        <div>
            <h2>{isEdit ? 'Edit Employee' : 'Add Employee'}</h2>
            <form onSubmit={handleSubmit}>
                <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" required/>
                <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" required/>
                <input name="emailId" value={form.emailId} onChange={handleChange} placeholder="Email" type="email" required/>
                <button type="submit">{isEdit ? 'Update' : 'Save'}</button>
                <button type="button" onClick={() => navigate('/employees')}>Cancel</button>
            </form>
        </div>
    )
}