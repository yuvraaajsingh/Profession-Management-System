let count = 1;
function addEmployee() {
  let name = document.getElementById("name").value;
  let profession = document.getElementById("profession").value;
  let age = document.getElementById("age").value;
  let addedE = document.getElementById("Added_Employees");
  let zeroE = document.getElementById("zero_Employee");
  let message = document.getElementById("message");
  let container = document.getElementById("employees_container");

  if (!message) {
    message = document.createElement("h3");
    message.id = "message";
    addedE.prepend(message);
  }

  if (name === "" || profession === "" || age === "") {
    message.innerText =
      "Error : Please make sure all the fields are filled before adding an employee!";
    message.style.color = "red";
    return;
  } else {
    message.innerText = "Success : Employee Added!";
    message.style.color = "green";
    if (zeroE) zeroE.remove();
  }

  let newDiv = document.createElement("div");
  newDiv.className = "employee-card";

  let newEmployeeName = document.createElement("p");
  newEmployeeName.className = "newEmployeeName";
  let newEmployeeProfession = document.createElement("p");
  newEmployeeProfession.className = "newEmployeeProfession";
  let newEmployeeAge = document.createElement("p");
  newEmployeeAge.className = "newEmployeeAge";
  let dltBtn = document.createElement("button");
  dltBtn.className = "delete-btn";

  newEmployeeName.innerText = `Name: ${name}`;
  newEmployeeProfession.innerText = `Profession: ${profession}`;
  newEmployeeAge.innerText = `Age: ${age}`;
  dltBtn.innerText = "Delete User";

  dltBtn.onclick = function () {
    newDiv.remove();
    dltBtn.remove();
  };

  // newDiv.appendChild(newEmployeeSRNo);
  newDiv.appendChild(newEmployeeName);
  newDiv.appendChild(newEmployeeProfession);
  newDiv.appendChild(newEmployeeAge);

  container.appendChild(newDiv);
  container.appendChild(dltBtn);

  count++;

  document.getElementById("name").value = "";
  document.getElementById("profession").value = "";
  document.getElementById("age").value = "";
}
