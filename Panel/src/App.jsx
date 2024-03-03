// import AdminDash from "./Dashboard/AdminDash"
import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import EmpWeek from "./Dashboard/EmpWeek"
import AdminLayout from "./Dashboard/AdminLayout"
import EmpDetail from "./Dashboard/EmpDetail"
import Department from "./Dashboard/Department"
import Designation from "./Dashboard/Designation"
import Task from "./Dashboard/Task"
import Login from "./Login/Login"
import SignUp from "./Login/SignUp"
import EmpLayout from "./Dashboard/EmpLayout"
import EmpHome from "./Dashboard/EmpHome"
import EmpProfile from "./Dashboard/EmpProfile"
import EmpTask from "./Dashboard/EmpTask"
import AddTask from './Dashboard/AddTask'

function App() {

  return (
    <>  
<BrowserRouter>
<Routes>
<Route path="/" element={<Login/>}/>
      <Route path="/sign" element={<SignUp/>} />
      <Route path="/dash" element={<EmpLayout/>} >
      <Route index element={<EmpHome/>}/>
      <Route path="/dash/profile" element={<EmpProfile/>}/>
      <Route path="/dash/task" element={<EmpTask/>}/>

     
</Route>
<Route path="/admin" element={<AdminLayout/>} >
  <Route index element={<EmpWeek/>}/>
  <Route path="/admin/employee" element={<EmpDetail/>}/>
  <Route path="/admin/dep" element={<Department/>}/>
  <Route path="/admin/des" element={<Designation/>}/>
  <Route path="/admin/task" element={<Task/>}/>
  <Route path='/admin/AddTask' element={<AddTask/>} />
  </Route>
    </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
