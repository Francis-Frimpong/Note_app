const addbtn = document.querySelector('.addBtn');
const formField = document.querySelector('.form-field');


function addNote (e) {
    e.preventDefault();

    const title = document.querySelector('.title').value;
    const note = document.querySelector('.notes').value;

    //creating the card
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    //creating the elements within the card
    const h3 = document.createElement('h3');
    h3.classList.add('card-title');
    h3.textContent = title;

    const p = document.createElement('p');
    p.classList.add('notes');
    p.textContent = note;

    //button div
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('card-buttons');

    const viewBtn = document.createElement('button');
    viewBtn.classList.add('view-btn')
    viewBtn.textContent = 'View';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';
    //add created buttons into the buttonDiv
    buttonDiv.appendChild(viewBtn);
    buttonDiv.appendChild(deleteBtn);

    //add created h3, p and buttons to card Div
    cardDiv.appendChild(h3);
    cardDiv.appendChild(p);
    cardDiv.appendChild(buttonDiv);

    //add cards to the parent container
    document.querySelector('.container').appendChild(cardDiv);

    clearField();   

}

function deleteNote(e) {
    if (e.target.classList.contains('delete-btn')){
        e.target.parentElement.parentElement.remove();
    }
}

document.querySelector('.container').addEventListener('click', deleteNote)

addbtn.addEventListener('click', addNote)

let clearField = () => formField.reset();
