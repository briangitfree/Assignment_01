// Program: The Employee Management System
// Assignment: Assignment 01
// JavaScript 2 - Comp 649
// Author: Brian Dinh




// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM




// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER


// ADD EMPLOYEE
//form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION

    // GET THE VALUES FROM THE TEXT BOXES

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS

    // CREATE THE DELETE BUTTON

    // RESET THE FORM

    // SET FOCUS BACK TO THE ID TEXT BOX

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE

//})

// DELETE EMPLOYEE



"use strict";
//form.addEventListener('submit', (e) => {
 window.addEventListener("load", init);

function init() {

    // Employee Count Variable
    let employeeCount = 0;

    // Form Controls
    const empID = document.getElementById("id");
    const empName = document.getElementById("name");
    const empExt = document.getElementById("extension");
    const empEmail = document.getElementById("email");
    const empDept = document.getElementById("department");
    const btnAdd = document.getElementById("submit");

    // Table and Output
    const employeeTable = document.getElementById("employees");
    const countOutput = document.getElementById("empCount");

    // Set Initial Focus
    empID.focus();

    // Add Employee Event
    btnAdd.addEventListener("click", function (e) {

       // PREVENT FORM SUBMISSION 
        e.preventDefault();

        // Get Values From Form / text boxes
        let id = empID.value.trim();
        let name = empName.value.trim();
        let ext = empExt.value.trim();
        let email = empEmail.value.trim();
        let dept = empDept.value;

        // Basic Validation
        if (
            id === "" ||
            name === "" ||
            ext === "" ||
            email === "" ||
            dept === ""
        ) {
            alert("Please complete all fields.");
            return;
        }

        // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
        let row = employeeTable.insertRow();

        // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
        let cellID = row.insertCell();
        let cellName = row.insertCell();
        let cellExt = row.insertCell();
        let cellEmail = row.insertCell();
        let cellDept = row.insertCell();
        let cellDelete = row.insertCell();

        // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
        cellID.appendChild(document.createTextNode(id));
        cellName.appendChild(document.createTextNode(name));
        cellExt.appendChild(document.createTextNode(ext));
        cellEmail.appendChild(document.createTextNode(email));
        cellDept.appendChild(document.createTextNode(dept));

        // CREATE THE DELETE BUTTON
        let btnDelete = document.createElement("button");
        btnDelete.textContent = "X";
        btnDelete.className = "btn btn-danger btn-sm";

        cellDelete.appendChild(btnDelete);

        // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE / Update Employee Count
        employeeCount++;
        countOutput.value = employeeCount;

        // Delete Employee Event
        btnDelete.addEventListener("click", function (e) {

            let selectedRow =
                e.target.parentNode.parentNode;

            let confirmDelete = confirm(
                "Are you sure you want to delete this employee?"
            );

            if (confirmDelete) {

                employeeTable.deleteRow(
                    selectedRow.rowIndex
                );

                employeeCount--;
                countOutput.value = employeeCount;
            }
        });

        // RESET THE FORM / Clear Form
        empID.value = "";
        empName.value = "";
        empExt.value = "";
        empEmail.value = "";
        empDept.selectedIndex = 0;

        // SET FOCUS BACK TO THE ID TEXT BOX / Return Cursor to Employee ID
        empID.focus();

    })};
