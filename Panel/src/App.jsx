// import AdminDash from "./Dashboard/AdminDash"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import EmpWeek from "./Dashboard/EmpWeek"
import AdminLayout from "./Dashboard/AdminLayout"
import EmpDetail from "./Dashboard/EmpDetail"
import Department from "./Dashboard/Department"
import Designation from "./Dashboard/Designation"
import Task from "./Dashboard/Task"

function App() {

  return (
    <>  
<BrowserRouter>
<Routes>
<Route path="/" element={<AdminLayout/>} >
  <Route index element={<EmpWeek/>}/>
  <Route path="/employee" element={<EmpDetail/>}/>
  <Route path="/dep" element={<Department/>}/>
  <Route path="/des" element={<Designation/>}/>
  <Route path="/task" element={<Task/>}/>
  </Route>
    </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
