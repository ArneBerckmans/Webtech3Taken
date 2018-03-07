class Note {
  constructor(title) {
    this.title = title;
    // HINT🤩 this.element = this.createElement(title);
    this.element = this.createElement(title);
    this.notesContainer = document.getElementById('notes');
    this.notesInput = document.getElementById('txtAddNote'); 
    this.AddButton = document.getElementById('btnAddNote'); 
    this.notesSection = document.getElementById('yourNotes');
      
    this.addNoteButton.addEventListener('click', () => this.saveToStorage());
      
      
  }
  
  createElement(title){
    let newNote = document.createElement('div');
    
    // HINT🤩 a.addEventListener('click', this.remove.bind(newNote));
       a.addEventListener('click', this.remove.bind(newNote));
      
      document.getElementById("btnAddNote").addEventListener("click", function(){
              
}); 
    
    return newNote;
  }
  
  add(){
    // HINT🤩
    // this function should append the note to the screen somehow (.appendChild)
    document.getElemenetById("txtAddNote").appendChild("yourNotes");
    
  }
  
  saveToStorage(){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
      
    if(this.notesInput.value){
        let key = Date.now().toString();
        localStorage.setItem(key, this.notesInput.value);
        this.displayNote(key, this.notesInput.value);
        Note.reset(this.notesInput);
        this.toggleButton();
    }  
  }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
  } 
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");
  
    // HINT🤩
    // clicking the button should work
    // pressing the enter key should also work
    // this.btnAdd = ???
    // this.btnAdd.addEventListener("click", this.createNote.bind(this));
    // this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
      
   let storageItels = localStorage.getItem(key, this.notesInput.value);
   
  }
   
  createNote(e){
    // this function should create a new note by using the Note() class
    
    // HINT🤩
    // note.add();
    // note.saveToStorage();
    // this.reset();
      
      
  }
  
  reset(){
    // this function should reset the form 
    document.getElementById("myForm").reset(); 
  }
  
}

let app = new App();