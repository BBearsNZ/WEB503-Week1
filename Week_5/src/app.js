//add button
const addBtn = document.getElementById('add');

//Click event listener

addBtn.addEventListener('click', ()=> addNewNote);

function addNewNote(text=  '') {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
        <div class="actions">   
            <button class="edit">
                <i class="fas fa-edit"></i>
            </button>

            <button class="delete">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>

        <div class=`main ${text ? " : "hidden"}`>
        <textarea class=`${text ? " : "hidden"}`>${text}</textarea>
    `
    const editBtn = note.querySelector('.edit');
    const main = note.querySelector('.main');
    const textarea = note.querySelector('textarea');
    deleteBtn.addEventListener('click', ()=> {
        note.remove();
    } )
    editBtn.addEventListener('click', ()=> {
        main.classList.toggle('hidden');
        textarea.classList.toggle('hidden');    
    } )

    textArea.addEventListener('inout', (e) => {
        const {value} = e.target;

        main.innerHTML = marked(value);         
    })

    document.body.appendChild(note);
    }
