const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

//add an event when form is submit
myForm.addEventListener('submit', onSubmit);



function onSubmit(e){

    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === '') {
        // alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
    
        // Remove error after 3 seconds
        setTimeout(() => msg.remove(), 3000);
      } 
      else {

        //task 12 code down to store multiple details in localStorage instead of name we use email address
        //creating object literal to store user details
        let myObj={
            name: nameInput.value,
            email: emailInput.value,

        };
        localStorage.setItem("userDetails"+email,JSON.stringify(myObj));
        
        
        // Create new list item with user
        const li = document.createElement('li');

    
        // Add text node with input values
        li.appendChild(document.createTextNode(`${myObj.name}: ${myObj.email}`));

        //add edit button
        var editButton = document.createElement('input');
        editButton.setAttribute('type', 'button');
        editButton.setAttribute('value', 'Edit');
        editButton.addEventListener('click', function(){
          document.getElementById('name').value = myObj.name;
          document.getElementById('email').value = myObj.email;
          li.remove();
        });
        editButton.setAttribute('class','inputButtons');
        editButton.style.border = '2px solid black';
        li.appendChild(editButton);

        //add remove button
        var removeButton = document.createElement('input');
        removeButton.setAttribute('type', 'button');
        removeButton.setAttribute('value', 'Remove');
        removeButton.addEventListener('click', function(){
        localStorage.removeItem("userDetails"+email);
        li.remove();
        });
        removeButton.setAttribute('class','inputButtons');
        removeButton.style.border ='2px solid red';
        li.appendChild(removeButton);
       
        // Append to ul
        userList.appendChild(li);

    
        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
      }
      
}


