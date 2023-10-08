
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/layout/Home';
import About from './component/layout/About';
// import Navbar from './component/layout/Navbar';
import Login from './component/pages/Login';
import Sidebar from './component/pages/Sidebar';
import Enquery from './component/Recontent/Enquery';
import EnqueryList from './component/Recontent/EnqueryList';
import Logout from './component/Recontent/Logout';
import CibilStatus from './component/Recontent/CibilStatus';
import Reupdate from './component/Recontent/Reupdate';
import Redelete from './component/Recontent/Redelete';
import Oepage from './component/OeModule/Oepage';
import OeList from './component/OeModule/OeList';
import CibilReg from './component/OeModule/CibilReg';
import CibilDelete from './component/Recontent/CibilDelete';
import Contact from './component/layout/UserNav2/Contact';

import Notification from './component/layout/UserNav2/Notification';
import Oelogout from './component/OeModule/Oelogout';
import Corporate from './component/layout/Corporate';


import Cmpage from './component/Cmmodule/Cmpage';
import Cmlist from './component/Cmmodule/Cmlist';
import Registration from './component/Recontent/Registration';
import Cmdelete from './component/Cmmodule/Cmdelete';
import Cmupdate from './component/Cmmodule/Cmupdate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/corporate' element={<Corporate />}></Route>

          <Route path='/contact' element={<Contact/>}></Route>

            {/* userNav2 */}

          {/* <Route path='/contact' element={<Contact />}></Route>
          <Route path='/email' element={<Email />}></Route>*/}
          <Route path='/notification' element={<Notification />}></Route> 


          <Route path='/login' element={<Login />}></Route>


          {/* re */}
          <Route path='/sidebar' element={<Sidebar />}></Route>
          <Route path='/enquery' element={<Enquery />}></Route>
          <Route path='/enquerylist' element={<EnqueryList />}></Route>
          <Route path='/reupdate/:userId' element={<Reupdate />}></Route>
          <Route path='/redelete/:userId' element={<Redelete />}></Route>

          <Route path='/cibilstatus' element={<CibilStatus />}></Route>
          <Route path='/cibildelete/:useId' element={<CibilDelete/>}></Route>

          <Route path='/registration' element={<Registration/>}></Route>


          <Route path='/logout' element={<Logout />}></Route>
          

          {/* oe */}
          <Route path='/oepage' element={<Oepage />}></Route>
          <Route path='/oelist' element={<OeList />}></Route>
          <Route path='/cibilreg' element={<CibilReg/>}></Route>
          <Route path='/Oelogout' element={<Oelogout/>}></Route>
          {/* <Route path='/Oelogout' element={<Oelogout/>}></Route> */}
          

          {/* cm */}
          <Route path='/cmpage' element={<Cmpage/>}></Route>
          <Route path='/cmlist' element={<Cmlist/>}></Route>
          <Route path='/cmupdate/:registerId' element={<Cmupdate/>}></Route>
          <Route path='/cmdelete/:registerId' element={<Cmdelete/>}></Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
