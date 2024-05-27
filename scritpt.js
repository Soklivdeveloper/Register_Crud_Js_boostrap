let seclectRow = null;

function errValidation() {
    let check = true;
    let id = document.getElementById('id').value;
    if(id == ''){
        document.getElementById('validation').classList.remove('hide');
        check = false;
    }
    else{
        document.getElementById('validation').classList.add('hide');
        check = true;
    }
    return check;
}

function Createtable(){
    let id = document.getElementById('id').value;
    let fullname = document.getElementById('fullname').value;
    let gender = document.getElementById('gender').value;
    let date_of_birth = document.getElementById('date_of_birth').value;
    let place_of_birth = document.getElementById('place_of_birth').value;
    let phone = document.getElementById('phone').value;
    let major = document.getElementById('major').value;
    let payment = document.getElementById('payment').value;

    let tbody = document.getElementById('tbody');
    let tr = tbody.insertRow(0);

    let td0 = tr.insertCell(0);
    let td1 = tr.insertCell(1);
    let td2 = tr.insertCell(2);
    let td3 = tr.insertCell(3);
    let td4 = tr.insertCell(4);
    let td5 = tr.insertCell(5);
    let td6 = tr.insertCell(6);
    let td7 = tr.insertCell(7);
    let td8 = tr.insertCell(8);

    td0.innerHTML = id;
    td1.innerHTML = fullname;
    td2.innerHTML = gender;
    td3.innerHTML = date_of_birth;
    td4.innerHTML = place_of_birth;
    td5.innerHTML = phone;
    td6.innerHTML = major;
    td7.innerHTML = payment;
    td8.innerHTML = `<a onclick= "editItem(this)" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="blue" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
  </svg></a> <a onclick= "deleteItem(this)" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="red" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg></a>`;
    console.log(tbody)
}
function clearItem(){
    document.getElementById('id').value = "";
    document.getElementById('fullname').value = "";
    document.getElementById('gender').value;
    document.getElementById('date_of_birth').value = "";
    document.getElementById('place_of_birth').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('major').value = "";
    document.getElementById('payment').value = "";

}
function deleteItem(tr){
    // console.log(tr.parentElement.parentElement)
    let row = tr.parentElement.parentElement;
    row.remove();
}

function editItem(tr){
    seclectRow = tr.parentElement.parentElement

    document.getElementById('id').value = seclectRow.cells[0].innerHTML;
    document.getElementById('fullname').value = seclectRow.cells[1].innerHTML;
    document.getElementById('gender').value = seclectRow.cells[2].innerHTML;
    document.getElementById('date_of_birth').value = seclectRow.cells[3].innerHTML;
    document.getElementById('place_of_birth').value = seclectRow.cells[4].innerHTML;
    document.getElementById('phone').value = seclectRow.cells[5].innerHTML;
    document.getElementById('major').value = seclectRow.cells[6].innerHTML;
    document.getElementById('payment').value = seclectRow.cells[7].innerHTML;

}


function updateValue(){
    seclectRow.cells[0].innerHTML = document.getElementById('id').value;
    seclectRow.cells[1].innerHTML = document.getElementById('fullname').value;
    seclectRow.cells[2].innerHTML = document.getElementById('gender').value;
    seclectRow.cells[3].innerHTML = document.getElementById('date_of_birth').value;
    seclectRow.cells[4].innerHTML = document.getElementById('place_of_birth').value;
    seclectRow.cells[5].innerHTML = document.getElementById('phone').value;
    seclectRow.cells[6].innerHTML = document.getElementById('major').value;
    seclectRow.cells[7].innerHTML = document.getElementById('payment').value;

    seclectRow = null;


}
function btnCreate(){
    if(errValidation()){
        if(seclectRow == null){
            Createtable();
        }
        else{
            updateValue();
        }
        clearItem();
    }

}