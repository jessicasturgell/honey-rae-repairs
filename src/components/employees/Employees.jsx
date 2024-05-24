import "./Employees.css"
import { useEffect, useState } from "react"
import { User } from "../users/User.jsx"
import { getStaffUsers } from "../../services/userService.jsx"
import { Link } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getStaffUsers().then((employeeArray) => {
            setEmployees(employeeArray)
        })
    }, [])

    return (
        <div className="employees">
            {employees.map((employeeObj) => {
                return (
                    <Link to={`/employees/${employeeObj.id}`} key={employeeObj.id}>
                        <User key={employeeObj.id} user={employeeObj} />
                    </Link>
                )
            })}
        </div>
    )
}