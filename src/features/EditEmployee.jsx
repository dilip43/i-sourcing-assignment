import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { employeeUpdated } from "./EmployeeSlice";


const EditEmployee = () => {
    const { pathname } = useLocation();
    const employeeId = parseInt(pathname.replace("/edit-employee/", ""));

    const user = useSelector((state) => state.employee.entities.find((emp) => emp.id == employeeId))


    const dispatch = useDispatch();
    const history = useNavigate();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [error, setError] = useState(null);

    const handleName = (e) => setName(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);

    const handleClick = () => {
        if (name && email) {
            dispatch(
                employeeUpdated({
                    id: employeeId,
                    name, email
                })
            )
            setError(null);
            history("/");
        }
        else {
            setError("fill all the fields")
        }

    }

    return (
        <div className="container">
            <div className="row">
                <h1>Edit Employee</h1>
            </div>
            <div className="row">
                <div className="three columns">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="edit your name" className="u-full-width" onChange={handleName} value={name} />

                    <label htmlFor="email">email</label>
                    <input type="email" id="name" placeholder="edit your email" className="u-full-width" onChange={handleEmail} value={email} />

                    {error && error}
                    <button onClick={handleClick} className="button-primary">Save Employee</button>
                </div>
            </div>
        </div>
    )
};

export default EditEmployee;
