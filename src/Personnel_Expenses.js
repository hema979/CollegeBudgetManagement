 
import React, { Component } from 'react';
import './Income.css';  
 
import { withRouter } from 'react-router-dom';
class Personnel_Expenses extends Component {

  componentDidMount() {
    this.calculateTotalAmountPersonnalExp();
    const savedTotal = localStorage.getItem('PersonnaltotalAmount');
    if (savedTotal !== null) {
      const totalAmountInput = document.getElementById('Personnal_total_amount');
      if (totalAmountInput) {
        totalAmountInput.value = savedTotal;
      }
    }
    
    const amountInputs = document.querySelectorAll('.personnalamount');
    amountInputs.forEach(input => {
      const id = input.closest('tr').id;
      const savedValue = localStorage.getItem(id);
      if (savedValue !== null) {
        input.value = savedValue;
      }
    });
  }

  calculateTotalAmountPersonnalExp = () => {
    let sum = 0;
    const amountInputs = document.querySelectorAll('.personnalamount');
    amountInputs.forEach(input => {
      const num = parseFloat(input.value.replace(/,/g, '')) || 0;
      sum += num;
    });
    const totalAmountInput = document.getElementById('Personnal_total_amount');
    if (totalAmountInput) {
      totalAmountInput.value = sum.toFixed(2);
      localStorage.setItem('Personnal Expenses', sum.toFixed(2));
    }
  };

  Personnal_handleInputChange = event => {
    this.calculateTotalAmountPersonnalExp();
    const id = event.target.closest('tr').id;
    const value = event.target.value;
    localStorage.setItem(id, value);
  };

  sendPersonnalDataToBackend = async () => {
    const totalAmountInput = document.getElementById('Personnal_total_amount');
    if (!totalAmountInput) {
      console.error('Total amount input not found.');
      return;
    }

    const totalAmount = parseFloat(totalAmountInput.value.replace(/,/g, '')) || 0;
  
    const rowData = [];
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
      const id = row.id;
      const input = row.querySelector('.personnalamount');
      if (input) {
        const value = parseFloat(input.value.replace(/,/g, '')) || 0;
        rowData.push({ id, value });
      }
    });
  
    const data = { totalAmount, rowData };
  
    try {
      const response = await fetch('http://localhost:3001/api/save-data', {
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
                                <h1>PERSONNAL EXPENSES</h1>
                            </th>
                        </tr>
                <tr>
                  <th className="text-center"></th>
                  <th className="text-center" text-lightable width="25%">
                    <h2>Particulars</h2>
                  </th>
                  <th className="text-center" >
                    <h2>Proposed Budget 2023-24</h2>
                  </th>
                </tr>
              </thead>
              <tbody>
                 
                 
                <tr id="expaddr1">
                  <td>1</td>
                  <td>Salaries and Wages</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right personnalamount"
                      onChange={this.Personnal_handleInputChange}
                    />
                  </td>
                </tr>
                
                <tr id="expaddr2">
                  <td>2</td>
                  <td>Provident Fund(EPF _ FPF) </td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right personnalamount"
                      onChange={this.Personnal_handleInputChange}
                    />
                  </td>
                </tr>

                <tr id="expaddr3">
                  <td>3</td>
                  <td> Staff Welfare</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right personnalamount"
                      onChange={this.Personnal_handleInputChange}
                    />
                  </td>
                </tr>

                <tr id="expaddr4">
                  <td>4</td>
                  <td> Comtribution to ESI</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right personnalamount"
                      onChange={this.Personnal_handleInputChange}
                    />
                  </td>
                </tr>

                <tr id="expaddr5">
                  <td>5</td>
                  <td> MEdiclaim</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right personnalamount"
                      onChange={this.Personnal_handleInputChange}
                    />
                  </td>
                </tr>

                <tr id="expaddr6">
                  <td>6</td>
                  <td>Gratuity Privision/Premium </td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right personnalamount"
                      onChange={this.Personnal_handleInputChange}
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
                      id="Personnal_total_amount"
                      readOnly
                    />
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <div className="button-container"> 
        <a href="/academic"class="previous round">&laquo;Previous</a>
        <button className="submit-button" onClick={this.sendPersonnalDataToBackend}>submit</button>
        <a href="/non" class="next round">Next &raquo;</a>
      </div>
      </div>
      </div>
    );
  }
}

export default Personnel_Expenses;
