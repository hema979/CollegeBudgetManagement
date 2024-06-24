import React from 'react';
import './Navbar.css';
function NavbarHeader() {
  return (
    <nav className="navbar navbar-expand-md-grid">
      <table width="100%" height="" border="0" >
        <tbody>
          <tr>
            <td height="21px" bgcolor="#D33F00" width="100%">&nbsp;</td>
          </tr>
          <tr>
            <td>
              <img src="https://svecw.ac.in/collegeimages/title_head.jpg" width="100%" height="120px" alt="College Title" />
            </td>
          </tr>
          <tr>
            <td height="23" background="https://svecw.ac.in/collegeimages/linkbg.gif" width="100%" ></td>
          </tr>
        </tbody>
      </table>
    </nav>
    
  );
}

export default NavbarHeader;