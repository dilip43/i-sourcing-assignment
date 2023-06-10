import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployee, employeeDeleted } from "./EmployeeSlice";

const EmployeeList = () => {
    const dispatch = useDispatch();

    const { entities } = useSelector((state) => state.employee);
    const loading = useSelector((state) => state.loading)

    const handleDelete = (id) => {
        dispatch(employeeDeleted({ id }));
    };
    return (
        <div className='container'>
            <div className='row'>
                <h1>Redux CRED APP</h1>
            </div>
            <div className='row'>
                <div className='two columns'>
                    <button
                        onClick={() => dispatch(fetchEmployee())}
                        className='button-primary'>
                        Load Employee
                    </button>
                </div>
                <div className='two columns'>
                    <Link to='/add-employee'>
                        <button className='button-primary'>Add Employee</button>
                    </Link>
                </div>
            </div>
            <div className='row'>
                {loading ? ("Loading...") :
                    <table className="u-full-width">
                        <thead>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                            {
                                entities.length &&
                                entities.map(({ id, name, email }, i) => (
                                    <tr key={i}>
                                        <td>{id}</td>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                        <td>
                                            <button onClick={() => handleDelete(id)}>
                                                Delete
                                            </button>
                                            <Link to={`edit-employee/${id}`}> <button>edit</button></Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                }
            </div>
        </div >
    );
};

export default EmployeeList;
