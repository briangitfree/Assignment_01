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

window.addEventListener("load", () => {

    // Form controls
    const empId = document.getElementById("id");
    const empName = document.getElementById("name");
    const empExt = document.getElementById("extension");
    const empEmail = document.getElementById("email");
    const empDept = document.getElementById("department");
    const btnAdd = document.getElementById("submit");

    // Table and output
    const employeeTable = document.getElementById("employees");
    const employeeCount = document.getElementById("empCount");

    // Running count
    let count = 0;

    // Update employee count display
    function updateCount() {
        employeeCount.value = count;
    }

    // Set initial focus
    empId.focus();

    // Add Employee
    btnAdd.addEventListener("click", (e) => {

        e.preventDefault();

        // Capture form values
        const id = empId.value.trim();
        const name = empName.value.trim();
        const extension = empExt.value.trim();
        const email = empEmail.value.trim();
        const department = empDept.value;

        // Optional validation
        if (
            id === "" ||
            name === "" ||
            extension === "" ||
            email === "" ||
            department === ""
        ) {
            alert("Please complete all fields.");
            return;
        }

        // Create new row
        let row = employeeTable.insertRow();

        // Create cells
        let cellID = row.insertCell();
        let cellName = row.insertCell();
        let cellExt = row.insertCell();
        let cellEmail = row.insertCell();
        let cellDept = row.insertCell();
        let cellDelete = row.insertCell();

        // Add text nodes
        cellID.appendChild(document.createTextNode(id));
        cellName.appendChild(document.createTextNode(name));
        cellExt.appendChild(document.createTextNode(extension));
        cellEmail.appendChild(document.createTextNode(email));
        cellDept.appendChild(document.createTextNode(department));

        // Create delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.className = "btn btn-danger btn-sm";

        cellDelete.appendChild(deleteBtn);

        // Increment employee count
        count++;
        updateCount();

        // Delete employee
        deleteBtn.addEventListener("click", (e) => {

            if (confirm("Are you sure you want to delete this employee?")) {

                employeeTable.deleteRow(
                    e.target.parentNode.parentNode.rowIndex
                );

                count--;
                updateCount();
            }

        });

        // Clear form
        empId.value = "";
        empName.value = "";
        empExt.value = "";
        empEmail.value = "";
        empDept.selectedIndex = 0;

        // Return focus to Employee ID field
        empId.focus();
    });

});