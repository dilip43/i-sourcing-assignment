import React, { useState } from "react";
import { employeeAdded } from "./EmployeeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
    const dispatch = useDispatch();
    const history = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);

    const handleName = (e) => setName(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);

    const empAmount = useSelector((state) => state.employee.entities.length)

    const handleClick = () => {
        if (name && email) {
            dispatch(
                employeeAdded({
                    id: empAmount + 1,
                    name, email
                })
            )
            setError(null);
            history("/");
        }
        else {
            setError("fill all the fields")
        }
        setName("");
        setEmail("");

    }


    return (
        <div className="container">
            <div className="row">
                <h1>Add Employee</h1>
            </div>
            <div className="row">
                <div className="three columns">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="enter your name" className="u-full-width" onChange={handleName} value={name} />

                    <label htmlFor="email">email</label>
                    <input type="email" id="name" placeholder="enter your email" className="u-full-width" onChange={handleEmail} value={email} />

                    {error && error}
                    <button onClick={handleClick} className="button-primary">Add Employee</button>
                </div>
            </div>
        </div>
    )
};

export default AddEmployee;
