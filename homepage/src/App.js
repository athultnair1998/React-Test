import Loginform from "./components/LoginForm";
import { Routes,Route} from 'react-router-dom'
import{BrowserRouter} from 'react-router-dom'
import Home from "./components/Home/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="page">
    <BrowserRouter>
        <Routes>
        <Route  path='/' element={<Loginform />} /> 
        <Route  path='/home' element={<Home />} /> 

        </Routes>
        <ToastContainer/>
    </BrowserRouter>
    </div>
  
  );
}

export default App;
