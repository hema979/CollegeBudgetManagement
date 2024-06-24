import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import NavbarHeader from './NavbarHeader';
import NavLine from './NavLine';
import LoginForm from './LoginForm';

function NavbarComponent() {
  return (
    <div>
       {/* <NavbarHeader/> */}
      {/* <nav className="navbar navbar-expand-md-grid">
        <NavLine/>
      </nav> */}
      

      {/* <div className="back">
        <div className="div-center">
          <div className="content">
             <LoginForm/>
          </div>
        </div>
      </div> */}

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}

export default NavbarComponent;