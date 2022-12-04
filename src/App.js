import "./App.css";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import User from "./component/user";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserProfile from "./component/userProfile";
import AddUser from "./component/addUser";
function App() {
  return (
    <Router>
      <div>
        <CssBaseline>
          <Container>
            <Routes>
              <Route  path="/" element={<User/>}></Route>
              <Route  path="users/:userId" element={<UserProfile/>}></Route>
              <Route path="adduser" element={<AddUser/>}></Route>
            </ Routes>
          </Container>
        </CssBaseline>
      </div>
    </Router>
  );
}

export default App;
