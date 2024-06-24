// import React, { Component } from 'react';
// import './Final_Budget.css';  

// // Import the Final_Budget class with a different name
// import { Final_Budget as MyFinalBudget } from './path-to-your-file';


// class YourReactComponent extends Component {
//     constructor(containerId) {
//         this.containerId = containerId;
//     }

//     displayTotalAmounts() {
//         const total_amount_income = localStorage.getItem('total_amount_income');
//         const academictotal_amount = localStorage.getItem('academictotal_amount');
//         const PersonnaltotalAmount = localStorage.getItem('PersonnaltotalAmount');
//         const nonrecurringtotal_amount = localStorage.getItem('nonrecurringtotal_amount');
//         const physical_Amount = localStorage.getItem('physicaltotal_Amount');

//         // Display total amounts in a new form and a table
//         const totals_Container = document.getElementById(this.containerId);

//         if (totals_Container) {
//             // Create a form
//             const newForm = document.createElement('form');
//             newForm.className = 'total-form'; // Add a class for styling (you can define styles in Final_Budget.css)

//             const formHeader = document.createElement('h2');
//             formHeader.textContent = 'Total Amounts Form';

//             const imcome_label = document.createElement('label');
//             imcome_label.textContent = 'Total Amount from Income: ';
//             const input1 = document.createElement('input');
//             input1.type = 'text';
//             input1.value = total_amount_income;
//             input1.readOnly = true;

//             const academic_label = document.createElement('label');
//             academic_label.textContent = 'Total Amount from Academic Form: ';
//             const input2 = document.createElement('input');
//             input2.type = 'text';
//             input2.value = academictotal_amount;
//             input2.readOnly = true;

//             const personal_label = document.createElement('label');
//             personal_label.textContent = 'Total Amount from Personal Form: ';
//             const input3 = document.createElement('input');
//             input3.type = 'text';
//             input3.value = PersonnaltotalAmount;
//             input3.readOnly = true;

//             const nonrecurring_label = document.createElement('label');
//             nonrecurring_label.textContent = 'Total Amount from Non-Recurring Form: ';
//             const input4 = document.createElement('input');
//             input4.type = 'text';
//             input4.value = nonrecurringtotal_amount;
//             input4.readOnly = true;

//             const physical_label = document.createElement('label');
//             physical_label.textContent = 'Total Amount from Physical Form: ';
//             const input5 = document.createElement('input');
//             input5.type = 'text';
//             input5.value = physical_Amount;
//             input5.readOnly = true;

//             newForm.appendChild(formHeader);
//             newForm.appendChild(imcome_label);
//             newForm.appendChild(input1);
//             newForm.appendChild(document.createElement('br'));
//             newForm.appendChild(academic_label);
//             newForm.appendChild(input2);
//             newForm.appendChild(document.createElement('br'));
//             newForm.appendChild(personal_label);
//             newForm.appendChild(input3);
//             newForm.appendChild(document.createElement('br'));
//             newForm.appendChild(nonrecurring_label);
//             newForm.appendChild(input4);
//             newForm.appendChild(document.createElement('br'));
//             newForm.appendChild(physical_label);
//             newForm.appendChild(input5);
//             newForm.appendChild(document.createElement('br'));

//             totals_Container.appendChild(newForm);

//             // Create a table
//             const table = document.createElement('table');
//             table.className = 'total-table'; // Add a class for styling (you can define styles in Final_Budget.css)
//             table.border = '1';

//             // Create header row
//             const headerRow = table.insertRow();
//             const formNames = ['Income', 'Academic', 'Personal', 'Non-Recurring', 'Physical'];
//             for (const formName of formNames) {
//                 const headerCell = headerRow.insertCell();
//                 headerCell.textContent = `${formName} Form`;
//             }

//             // Create a row for total amounts
//             const totalRow = table.insertRow();
//             const totalAmounts = [total_amount_income, academictotal_amount, PersonnaltotalAmount, nonrecurringtotal_amount, physical_Amount];
//             for (const totalAmount of totalAmounts) {
//                 const cell = totalRow.insertCell();
//                 cell.textContent = totalAmount;
//             }

//             totals_Container.appendChild(table);
//         } else {
//             console.error(`Container with ID '${this.containerId}' not found.`);
//         }
//         <><a href="/income"class="previous round">&laquo;Previous</a>
      
       
//        </>
//     }
// }

// // Create an instance of the Final_budget class and display the total amounts
 
// document.addEventListener('DOMContentLoaded', function () {
//     const finalBudget = new Final_Budget('totals_Container');
//     finalBudget.displayTotalAmounts();
// });

 

// export {Final_Budget};