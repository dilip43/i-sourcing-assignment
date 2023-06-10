import { BrowserRouter, Routes, Route } from "react-router-dom"
import EmployeeList from "./features/EmployeeList";
import AddEmployee from "./features/AddEmployee";
import EditEmployee from "./features/EditEmployee"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmployeeList />} />
        <Route path='/add-employee' element={<AddEmployee />} />
        <Route path='/edit-employee/:id' element={<EditEmployee />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
