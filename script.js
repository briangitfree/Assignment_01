// Program: The Employee Management System
// Assignment: Assignment 01
// JavaScript 2 - Comp 649
// Author: Brian Dinh


"use strict";

let employeeCount = 0;

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.getElementById("addForm");
const employeeTable = document.getElementById("employees");
const countOutput = document.getElementById("empCount");

// ADD EMPLOYEE
form.addEventListener("submit", function (e) {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const id = document.getElementById("id").value.trim();
    const name = document.getElementById("name").value.trim();
    const ext = document.getElementById("extension").value.trim();
    const email = document.getElementById("email").value.trim();
    const dept = document.getElementById("department").value;

    // GET THE VALUES FROM THE TEXT BOXES
    let row = employeeTable.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    row.insertCell().textContent = id;
    row.insertCell().textContent = name;
    row.insertCell().textContent = ext;
    row.insertCell().textContent = email;
    row.insertCell().textContent = dept;

    let deleteCell = row.insertCell();
    let btnDelete = document.createElement("button");

    //Message to display on the delete button (in danger)
    btnDelete.textContent = "X";
    btnDelete.className = "btn btn-danger btn-sm";

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    deleteCell.appendChild(btnDelete);

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    employeeCount++;
    countOutput.value = employeeCount;

    // CREATE THE DELETE BUTTON and question to confirm deletion of employee, If ok, delete the employee row and decrement the employee count
    btnDelete.addEventListener("click", function () {
        if (confirm("Are you sure you want to delete this employee?")) {
            row.remove();
            employeeCount--;
            countOutput.value = employeeCount;
        }
    });

    // RESET THE FORM
    form.reset();
});
