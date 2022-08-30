import Sidebar from "./Componant/sidebar";
import Searchbar from "./Componant/searchbar";
import { Routes, Route } from "react-router-dom";
import Myclass from "./screens/Myclass";
import Fee from "./screens/Fee";
import Faculty from "./screens/Faculty";
import Help from "./screens/Help";
import Reciept from "./screens/Reciept";
import Report from "./screens/Report";
import Studentregister from "./screens/Studentregister";
import Changepassword from "./Componant/Changepassword";
import Main from "./Componant/content";
import FeesDetail from "./screens/FeesDetail";
import ReciptScreen from "./screens/ReciptScreen";
import Salary from "./screens/Salary";
import Dashboard from "./screens/Dashboard";
import Updateprofile from "./Componant/Updateprofile";
import AdminLogin from "./screens/AdminLogin";

function App() {
  return (
    <div className="bg-Shad-400 min-h-screen flex">
      <Sidebar />
      <div className="w-full ">
        <div className=" ">
          <Searchbar />
        </div>
        <div className=" mt-20 ml-60">
          <Routes>
            <Route exact path="/" element={<AdminLogin />} />
            <Route exact path="dashboard" element={<Dashboard />} />
            <Route exact path="myclass" element={<Myclass />} />
            <Route exact path="fee" element={<Fee />} />
            <Route exact path="faculty" element={<Faculty />} />
            <Route exact path="help" element={<Help />} />
            <Route exact path="reciept/recipet" element={<Reciept />} />
            <Route exact path="reciept" element={<ReciptScreen />} />
            <Route exact path="report" element={<Report />} />
            <Route exact path="studentregister" element={<Studentregister />} />
            <Route path="/fee/:id" element={<FeesDetail />} />
            <Route path="/salary/:id" element={<Salary />} />
            <Route
              exact
              path="/Componant/Updateprofile"
              element={<Updateprofile />}
            />
            <Route
              exact
              path="/Componant/Changepassword"
              element={<Changepassword />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
