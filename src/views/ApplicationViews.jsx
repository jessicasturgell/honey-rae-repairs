import { TicketList } from "../components/tickets/TicketList.jsx"
import { CustomerList } from "../components/customers/CustomersList.jsx"
import { EmployeeList } from "../components/employees/Employees.jsx"
import { NavBar } from "../components/nav/NavBar.jsx"
import { Routes, Route, Outlet } from "react-router-dom"
import { Welcome } from "../components/welcome/Welcome.jsx"
import { CustomerDetails } from "../components/customers/CustomerDetails.jsx"
import { EmployeeDetails } from "../components/employees/EmployeeDetails.jsx"
import { useEffect, useState } from "react"



export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)

    setCurrentUser(honeyUserObject)
  }, [])

  return (
  <Routes>
    <Route 
      path="/" 
      element={
        <>
          <NavBar />
          <Outlet />
        </>
      }
    >
      <Route index element={<Welcome />} />
      <Route 
        path="/tickets" 
        element={<TicketList currentUser={currentUser} />} />
      <Route path="/employees">
        <Route index element={<EmployeeList />} />
        <Route path=":employeeId" element={<EmployeeDetails />} />
      </Route>
      <Route path="/customers">
        <Route index element={<CustomerList />} />
        <Route path=":customerId" element={<CustomerDetails />} />
      </Route>
    </Route>
  </Routes>
  )
}