import "./App.css"
import { TicketList } from "./components/tickets/TicketList.jsx"
import { CustomerList } from "./components/customers/CustomersList.jsx"
import { EmployeeList } from "./components/employees/Employees.jsx"
import { NavBar } from "./components/nav/NavBar.jsx"
import { Routes, Route, Outlet } from "react-router-dom"

export const App = () => {
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
      <Route path="/tickets" element={<TicketList />} />
      <Route path="/customers" element={<CustomerList />} />
      <Route path="/employees" element={<EmployeeList />} />
    </Route>
  </Routes>
  )
}