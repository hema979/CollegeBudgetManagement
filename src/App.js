import logo from './logo.svg';
import './App.css';
import NavbarComponent from './NavbarComponent';
import Income from './Income';
import Personnel_Expenses from './Personnel_Expenses';
import NavLine from './NavLine';

 import { Route,Routes } from 'react-router-dom';
import Academic_Expenditure from './Academic_Expenditure';
import Nonrecurring from './Nonrecurring';
import Expenditure_Recurrning from './Expenditure_Recurrning';
import NavbarHeader from './NavbarHeader';
import LoginForm from './LoginForm';
import FinalTable from './FinalTable';
import Final_Budget from './Final_Budget';
function App() {
  return (
    <div>
    <div>
    <NavbarHeader/> 
     
     <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container">
        <a className="navbar-brand" href="/">Home</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-expanded="false">
    Departments
  </a>
  <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
    <li><a className="dropdown-item" href="#">CSE</a></li>
    <li><a className="dropdown-item" href="#">IT</a></li>
    <li><a className="dropdown-item" href="#">ECE</a></li>
  </ul>
</li>

 

            <li className="nav-item  ">
            <a href="income" className='nav-link'>Income</a>
            
            </li>
            <li className="nav-item dropdown">
            <a href="non" className='nav-link'>Non-Recurring</a>
              
            </li>
             
            <li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-expanded="false">
    Recurring expenses
  </a>
  <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
    <li><a className="dropdown-item" href="exprec">Physical Expenditure</a></li>
    <li><a className="dropdown-item" href="academic">Academic Expenditure</a></li>
    <li><a className="dropdown-item" href="personal">Personal Expenses</a></li>
  </ul>
</li>
            </ul>
          
          <form className="d-flex">
          <a href="/login" className="btn btn-outline-success"> Login</a>
          </form>
        </div>
      </div>
    </nav>
    </div>
  

    <div className="App">
      <Routes>

    <Route path="/income" element={<Income/>}/>
     <Route path="/PersonalExpenses" element={<Expenditure_Recurrning/>}/>
     <Route path="/non" element={<Nonrecurring/>}/>
     <Route path="/exprec" element={<Expenditure_Recurrning/>}/>
     <Route path="/academic" element={<Academic_Expenditure/>}/>
     <Route path="/personal" element={<Personnel_Expenses/>}/>
     <Route path="/login" element={<LoginForm/>}/>

    </Routes>
            </div>
            <NavbarComponent/>
            </div>
  ); 
};

export default App;