import React, { Component } from 'react';
import './Income.css';  
 

class Nonrecurring extends Component {

  

  componentDidMount() {
    this.nonrecurringcalculateTotalAmount();
    const savedTotal = localStorage.getItem('Income');
    if (savedTotal !== null) {
      document.getElementById('nonrecurringtotal_amount').value = savedTotal;
    }
    
    const amountInputs = document.querySelectorAll('.nonrecurringamount');
    amountInputs.forEach(input => {
      const id = input.closest('tr').id;
      const savedValue = localStorage.getItem(id);
      if (savedValue !== null) {
        input.value = savedValue;
      }
    });
  }

  nonrecurringcalculateTotalAmount = () => {
    let sum = 0;
    const amountInputs = document.querySelectorAll('.nonrecurringamount');
    amountInputs.forEach(input => {
      const num = parseFloat(input.value.replace(/,/g, '')) || 0;
      sum += num;
    });
    document.getElementById('nonrecurringtotal_amount').value = sum.toFixed(2);
    localStorage.setItem('INCOME', sum.toFixed(2));
  };

  nonrecurringhandleInputChange = event => {
    this.nonrecurringcalculateTotalAmount();
    const id = event.target.closest('tr').id;
    const value = event.target.value;
    localStorage.setItem(id, value);
  };

  nonrecurringsendDataToBackend = async () => {
    const totalAmountInput = document.getElementById('nonrecurringtotal_amount');
    if (!totalAmountInput) {
      console.error('Total amount input not found.');
      return;
    }
  
    const totalAmount = parseFloat(totalAmountInput.value.replace(/,/g, '')) || 0;
  
    const rowData = [];
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
      const id = row.id;
      const input = row.querySelector('.nonrecurringamount');
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
                                <h1>NONRECURRING</h1>
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
                 
                 
                <tr id="nonrecurringaddr1">
                  <td>1</td>
                  <td>Lab Equipments </td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right nonrecurringamount"
                      onChange={this.nonrecurringhandleInputChange}
                    />
                  </td>
                </tr>
                
                <tr id="nonrecurringaddr2">
                  <td>2</td>
                  <td>Computers and Pheripherals</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right nonrecurringamount"
                      onChange={this.nonrecurringhandleInputChange}
                    />
                  </td>
                </tr>

                <tr id="nonrecurringaddr3">
                  <td>3</td>
                  <td>Softwares of all Departments</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right nonrecurringamount"
                      onChange={this.nonrecurringhandleInputChange}
                    />
                  </td>
                </tr>

                <tr id="nonrecurringaddr4">
                  <td>4</td>
                  <td>Furniture and Fixtures</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right nonrecurringamount"
                      onChange={this.nonrecurringhandleInputChange}
                    />
                  </td>
                </tr>

                <tr id="nonrecurringaddr5">
                  <td>5</td>
                  <td>Air Conditioner / Projectors / UPS</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right nonrecurringamount"
                      onChange={this.nonrecurringhandleInputChange}
                    />
                  </td>
                </tr>

                <tr id="nonrecurringaddr6">
                  <td>6</td>
                  <td>Electrical Equipment </td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right nonrecurringamount"
                      onChange={this.nonrecurringhandleInputChange}
                    />
                  </td>
                </tr>
                <tr id="nonrecurringaddr7">
                  <td>7</td>
                  <td>Library Books and Journals</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right nonrecurringamount"
                      onChange={this.nonrecurringhandleInputChange}
                    />
                  </td>
                </tr>
                <tr id="nonrecurringaddr8">
                  <td>8</td>
                  <td>Sports Equipment</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right nonrecurringamount"
                      onChange={this.nonrecurringhandleInputChange}
                    />
                  </td>
                </tr>
                <tr id="nonrecurringaddr9">
                  <td>9</td>
                  <td>Motor Vehicles</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right nonrecurringamount"
                      onChange={this.nonrecurringhandleInputChange}
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
                      id="nonrecurringtotal_amount"
                      readOnly
                    />
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div className="button-container">
      <a href="/personal"class="previous round">&laquo;Previous</a>
        <button className="submit-button" onClick={this.nonrecurringsendDataToBackend}>submit</button>
 </div>
      </div>
      </div>
    );
  }
}

export default  Nonrecurring;