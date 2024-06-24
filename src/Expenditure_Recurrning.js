import React, { Component } from 'react';
import './Income.css';  
 

class  Expenditure_Recurrning extends Component {

  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
    };
  }


     
     

  componentDidMount() {
    this.ExpRecurringcalculateTotalAmount();
    const savedTotal = localStorage.getItem('Income');
    if (savedTotal !== null) {
      document.getElementById('ExpRecurringtotal_amount').value = savedTotal;
    }
    
    const amountInputs = document.querySelectorAll('.ExpRecurringamount');
    amountInputs.forEach(input => {
      const id = input.closest('tr').id;
      const savedValue = localStorage.getItem(id);
      if (savedValue !== null) {
        input.value = savedValue;
      }
    });
  }


  
  ExpRecurringcalculateTotalAmount = () => {
    let sum = 0;
    const amountInputs = document.querySelectorAll('.ExpRecurringamount');
    amountInputs.forEach(input => {
      const num = parseFloat(input.value.replace(/,/g, '')) || 0;
      sum += num;
    });
    document.getElementById('ExpRecurringtotal_amount').value = sum.toFixed(2);
    localStorage.setItem('ExpRecurring', sum.toFixed(2));
  };

  ExpRecurringhandleInputChange = event => {
    this.ExpRecurringcalculateTotalAmount();
    const id = event.target.closest('tr').id;
    const value = event.target.value;
    localStorage.setItem(id, value);
  };

  ExpRecurringsendDataToBackend = async () => {
    if (this.state.submitted) {
      alert('Data has already been submitted. Please check again.');
      return;
    }

    const totalAmountInput = document.getElementById('ExpRecurringtotal_amount');
    if (!totalAmountInput) {
      console.error('Total amount input not found.');
      return;
    }
  
    const totalAmount = parseFloat(totalAmountInput.value.replace(/,/g, '')) || 0;
  
    const rowData = [];
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
      const id = row.id;
      const input = row.querySelector('.ExpRecurringamount');
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
    console.log('Data submitted successfully');
    this.setState({ submitted: true }, () => {
      alert('Data has been successfully submitted!');
    });
  };



  

  render() {
    const { submitted } = this.state;
    return (
      <div>
 
      
      <div className="container">
        <div className="row clearfix">
          <div className="col-md-12 column">
            <table className="table table-bordered table-hover" id="tab_logic" cellPadding="0" cellSpacing="0">
              <thead>

              <tr>
                            <th colspan="3" class="text-center">
                                <h1>Physical Expenditure</h1>
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
                 
                 
                <tr id="ExpRecurringaddr1">
                  <td>1</td>
                  <td>Advertisement Expenses</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right ExpRecurringamount"
                      onChange={this.ExpRecurringhandleInputChange}
                    />
                  </td>
                </tr>
                
                <tr id="ExpRecurringaddr2">
                  <td>2</td>
                  <td>Audit Fee</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right ExpRecurringamount"
                      onChange={this.ExpRecurringhandleInputChange}
                    />
                  </td>
                </tr>

                <tr id="ExpRecurringaddr3">
                  <td>3</td>
                  <td>Bank Charges</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right ExpRecurringamount"
                      onChange={this.ExpRecurringhandleInputChange}
                    />
                  </td>
                </tr>

                <tr id="ExpRecurringaddr4">
                  <td>4</td>
                  <td>Books and Periodicals, Journals</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right ExpRecurringamount"
                      onChange={this.ExpRecurringhandleInputChange}
                    />
                  </td>
                </tr>

                <tr id="ExpRecurringaddr5">
                  <td>5</td>
                  <td>Electricity Charges</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right ExpRecurringamount"
                      onChange={this.ExpRecurringhandleInputChange}
                    />
                  </td>
                </tr>

                <tr id="ExpRecurringaddr6">
                  <td>6</td>
                  <td>Financial Charges / Interest Charges</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right ExpRecurringamount"
                      onChange={this.ExpRecurringhandleInputChange}
                    />
                  </td>
                </tr>
                <tr id="ExpRecurringaddr7">
                  <td>7</td>
                  <td>General Expenses</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right ExpRecurringamount"
                      onChange={this.ExpRecurringhandleInputChange}
                    />
                  </td>
                </tr>
                <tr id="ExpRecurringaddr8">
                  <td>8</td>
                  <td>Guest House Maintenance</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right ExpRecurringamount"
                      onChange={this.ExpRecurringhandleInputChange}
                    />
                  </td>
                </tr>
                <tr id="ExpRecurringaddr9">
                  <td>9</td>
                  <td>Horticulture Expenses</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right ExpRecurringamount"
                      onChange={this.ExpRecurringhandleInputChange}
                    />
                  </td>
                </tr>
                <tr id="ExpRecurringaddr10">
                  <td>10</td>
                  <td>House Keeping Charges</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right ExpRecurringamount"
                      onChange={this.ExpRecurringhandleInputChange}
                    />
                  </td>
                </tr>
                <tr id="ExpRecurringaddr11">
                  <td>11</td>
                  <td>Students Insurance and Building Insurance</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right ExpRecurringamount"
                      onChange={this.ExpRecurringhandleInputChange}
                    />
                  </td>
                </tr>
                <tr id="ExpRecurringaddr12">
                  <td>12</td>
                  <td>Professional Charges</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right ExpRecurringamount"
                      onChange={this.ExpRecurringhandleInputChange}
                    />
                  </td>
                </tr>
                <tr id="ExpRecurringaddr13">
                  <td>13</td>
                  <td>Rates and Taxes, Professional Tax, Property Tax</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right ExpRecurringamount"
                      onChange={this.ExpRecurringhandleInputChange}
                    />
                  </td>
                </tr>
                <tr id="ExpRecurringaddr14">
                  <td>14</td>
                  <td>Repairs and Maintenance</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right ExpRecurringamount"
                      onChange={this.ExpRecurringhandleInputChange}
                    />
                  </td>
                </tr>
                
                <tr id="ExpRecurringaddr15">
                  <td>15</td>
                  <td>Building Maintenance</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right ExpRecurringamount"
                      onChange={this.ExpRecurringhandleInputChange}
                    />
                  </td>
                </tr>
                <tr id="ExpRecurringaddr16">
                  <td>16</td>
                  <td>Vehicle Maintenance</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right ExpRecurringamount"
                      onChange={this.ExpRecurringhandleInputChange}
                    />
                  </td>
                </tr>
                <tr id="ExpRecurringaddr17">
                  <td>17</td>
                  <td>Electrical Maintenance</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right ExpRecurringamount"
                      onChange={this.ExpRecurringhandleInputChange}
                    />
                  </td>
                </tr>
                <tr id="ExpRecurringaddr18">
                  <td>18</td>
                  <td>Computer Maintenance</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right ExpRecurringamount"
                      onChange={this.ExpRecurringhandleInputChange}
                    />
                  </td>
                </tr>
                <tr id="ExpRecurringaddr19">
                  <td>19</td>
                  <td>Generator Maintenance</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right ExpRecurringamount"
                      onChange={this.ExpRecurringhandleInputChange}
                    />
                  </td>
                </tr>
                <tr id="ExpRecurringaddr20">
                  <td>20</td>
                  <td>Furniture Maintenance</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right ExpRecurringamount"
                      onChange={this.ExpRecurringhandleInputChange}
                    />
                  </td>
                </tr>
                <tr id="ExpRecurringaddr21">
                  <td>21</td>
                  <td>Security Charges</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right ExpRecurringamount"
                      onChange={this.ExpRecurringhandleInputChange}
                    />
                  </td>
                </tr>
                <tr id="ExpRecurringaddr22">
                  <td>22</td>
                  <td>Telephone Charges</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right ExpRecurringamount"
                      onChange={this.ExpRecurringhandleInputChange}
                    />
                  </td>
                </tr>
                <tr id="ExpRecurringaddr23">
                  <td>23</td>
                  <td>Transporatation of Goods and Service</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right ExpRecurringamount"
                      onChange={this.ExpRecurringhandleInputChange}
                    />
                  </td>
                </tr>
                <tr id="ExpRecurringaddr24">
                  <td>24</td>
                  <td>Water Treatment Plant Maintenance</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right ExpRecurringamount"
                      onChange={this.ExpRecurringhandleInputChange}
                    />
                  </td>
                </tr>
                <tr id="ExpRecurringaddr25">
                  <td>25</td>
                  <td>Sewage Treatment Plant Expenses</td>
                  <td>
                    <input
                      type="text"
                      className="form-control input-sm text-right ExpRecurringamount"
                      onChange={this.ExpRecurringhandleInputChange}
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
                      id="ExpRecurringtotal_amount"
                      readOnly
                    />
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div className="button-container">
        <a href="/income"class="previous round">&laquo;Previous</a>
        <button className="submit-button" onClick={this.ExpRecurringsendDataToBackend} disabled={submitted}>submit</button>
        {submitted && (
              <p>Data has been successfully submitted!</p>
            )}

      <a href="/academic" class="next round">Next &raquo;</a>
      </div>
      </div>
      
      </div>
    );
  }
}

export default   Expenditure_Recurrning;