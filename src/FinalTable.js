import React, { Component } from 'react';
import './Income.css';

class FinalTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      totalAmount: 0,
    };
  }

  componentDidMount() {
    // Calculate total amount from localStorage or other sources if needed
    this.calculateTotalAmount();
  }

  calculateTotalAmount = () => {
    // Calculate the total amount by fetching data from localStorage or other sources
    // For example:
    const incomeTotal = parseFloat(localStorage.getItem('INCOME')) || 0;
    const expRecurringTotal = parseFloat(localStorage.getItem('ExpRecurring')) || 0;
    const personnalTotal = parseFloat(localStorage.getItem('Personnal Expenses')) || 0;

    const totalAmount = incomeTotal + expRecurringTotal + personnalTotal;
    this.setState({ totalAmount });
  };

  sendFinalDataToBackend = async () => {
    // You can send the total amount to the backend here
    // Add your API call or other logic
    // For example:
    const { totalAmount } = this.state;

    try {
      const response = await fetch('http://localhost:3003/api/save-final-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ totalAmount }),
      });

      if (response.ok) {
        console.log('Final data sent to backend successfully.');
        this.setState({ submitted: true });
      } else {
        console.error('Failed to send final data to backend.');
      }
    } catch (error) {
      console.error('Error sending final data to backend:', error);
    }
  };

  render() {
    const { submitted, totalAmount } = this.state;

    return (
      <div className="container">
        <div className="row clearfix">
          <div className="col-md-12 column">
            <table className="table table-bordered table-hover" id="finalTable" cellPadding="0" cellSpacing="0">
              <thead>
                <tr>
                  <th colspan="3" className="text-center">
                    <h1>Final Table</h1>
                  </th>
                </tr>
                <tr>
                  <th className="text-center"></th>
                  <th className="text-center" text-lightable width="25%">
                    <h2>Particulars</h2>
                  </th>
                  <th className="text-center">
                    <h2>Total</h2>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td className="text-center">
                    <h4>Income</h4>
                     
                  </td>
                  
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={totalAmount.toFixed(2)}
                      readOnly
                    />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-center">
                    <h4>Non-recurrning</h4>
                     
                  </td>
                  
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={totalAmount.toFixed(2)}
                      readOnly
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="button-container">
          <button className="submit-button" onClick={this.sendFinalDataToBackend} disabled={submitted}>
            Submit Final Data
          </button>
          {submitted && (
            <p>Data has been successfully submitted!</p>
          )}
        </div>
      </div>
    );
  }
}

export default FinalTable;
