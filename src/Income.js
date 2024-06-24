import React, { Component } from 'react';
import './Income.css';  
 
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Personnel_Expenses from './Personnel_Expenses';
 

 
class Income extends Component {

  

  componentDidMount() {
    this.calculateTotalAmount();
    const savedTotal = localStorage.getItem('Income');
    if (savedTotal !== null) {
      document.getElementById('total_amount').value = savedTotal;
    }
    
    const amountInputs = document.querySelectorAll('.amount');
    amountInputs.forEach(input => {
      const id = input.closest('tr').id;
      const savedValue = localStorage.getItem(id);
      if (savedValue !== null) {
        input.value = savedValue;
      }
    });
  }

  calculateTotalAmount = () => {
    let sum = 0;
    const amountInputs = document.querySelectorAll('.amount');
    amountInputs.forEach(input => {
      const num = parseFloat(input.value.replace(/,/g, '')) || 0;
      sum += num;
    });
    document.getElementById('total_amount').value = sum.toFixed(2);
    localStorage.setItem('INCOME', sum.toFixed(2));
  };

  handleInputChange = event => {
    this.calculateTotalAmount();
    const id = event.target.closest('tr').id;
    const value = event.target.value;
    localStorage.setItem(id, value);
  };

  sendDataToBackend = async () => {
    const totalAmountInput = document.getElementById('total_amount');
    if (!totalAmountInput) {
      console.error('Total amount input not found.');
      return;
    }
  
    const totalAmount = parseFloat(totalAmountInput.value.replace(/,/g, '')) || 0;
  
    const rowData = [];
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
      const id = row.id;
      const input = row.querySelector('.amount');
      if (input) {
        const value = parseFloat(input.value.replace(/,/g, '')) || 0;
        rowData.push({ id, value });
      }
    });
  
    const data = { totalAmount, rowData };
  
    try {
      const response = await fetch('http://localhost:3002/api/save-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        console.log('Data sent to backend successfully.');
        // Optionally, you can reset the input fields here if needed.
      } else {
        console.error('Failed to send data to backend.');
      }
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };
  
 
  render() {
    return (
      <div>
 
      
      <div className="container">
        <div className="row clearfix">
          <div className="col-md-12 column">
            <table className="table table-bordered table-hover" id="tab_logic" cellPadding="0" cellSpacing="0">
              <thead>

              <tr>
                            <th colspan="3" class="text-center">
                                <h1>INCOME</h1>
                            </th>
                        </tr>
                <tr>
                  <th className="text-center"></th>
                  <th className="text-center" text-lightable width="25%">
                    <h2>Particulars</h2>
                  </th>
                  <th className="text-center">
                    <h2>Proposed Budget 2023-24</h2>
                  </th>
                </tr>
              </thead>
              <tbody>
                 
                 
                <tr id="addr1">
                  <td>1</td>
                  <td>Tuition Fee</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right amount"
                      onChange={this.handleInputChange}
                      required
                    />
                  </td>
                </tr>
                
                <tr id="addr2">
                  <td>2</td>
                  <td>B.Tech / B.Pharm / BDS / Polytechnic/School</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right amount"
                      onChange={this.handleInputChange}
                    />
                  </td>
                </tr>

                <tr id="addr3">
                  <td>3</td>
                  <td>M.Tec/ Mpharm / MDS/MBA/ MCA</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right amount"
                      onChange={this.handleInputChange}
                    />
                  </td>
                </tr>

                <tr id="addr4">
                  <td>4</td>
                  <td>Research Grants</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right amount"
                      onChange={this.handleInputChange}
                    />
                  </td>
                </tr>

                <tr id="addr5">
                  <td>5</td>
                  <td>Hospital Revenue (clinic wise)</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right amount"
                      onChange={this.handleInputChange}
                    />
                  </td>
                </tr>

                <tr id="addr6">
                  <td>6</td>
                  <td>Hostel Fee and Mess Fee</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right amount"
                      onChange={this.handleInputChange}
                    />
                  </td>
                </tr>
                <tr id="addr7">
                  <td>7</td>
                  <td>Transportation Fee</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right amount"
                      onChange={this.handleInputChange}
                    />
                  </td>
                </tr>
                <tr id="addr8">
                  <td>8</td>
                  <td>Other Revenue (Radio Vishnu 90.4)</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right amount"
                      onChange={this.handleInputChange}
                    />
                  </td>
                </tr>

              </tbody>
              <tfoot>
                <tr id="totalRow">
                  <td></td>
                  <td className="text-center">
                    <h4>Total</h4>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      id="total_amount"
                      readOnly
                    />
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div className="button-container"> 
        <button className="submit-button" onClick={this.sendDataToBackend}>submit</button>
            
      <a href="/PersonalExpenses" class="next round">Next &raquo;</a>
           
          
       
</div>
         
      </div>
      </div>
    );
  }
}

export default  Income;