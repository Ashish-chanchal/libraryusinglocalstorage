// function Book(name, author, type) {
//     this.name = name;
//     this.author = author;
//     this.type = type;
// }

// function Display() {

// }
// Display.prototype.add = function (book) {
//     let tablebody = document.getElementById("tablebody");
//     let uistring = `
//         <tr>                 
//             <td>${book.name}</td>
//              <td>${book.author}</td>
//             <td>${book.type}</td>
//         </tr>`;
//         tablebody.innerHTML+=uistring;
// }

// Display.prototype.clear = function () {
//     let libform = document.getElementById("library-form");
//     libform.reset();
// }

showbooks();
// submit library-form
let libraryform = document.getElementById("library-form");
libraryform.addEventListener('submit', libraryfromsubmit);


function libraryfromsubmit(e) {
    e.preventDefault();
    let name = document.getElementById('bookname');
    let author = document.getElementById('author');
    let type;
    let fiction = document.getElementById("Fiction");
    let Programming = document.getElementById("Programming");
    let Cooking = document.getElementById("Cooking");
    if (fiction.checked) {
        type = fiction.value;
    }
    if (Programming.checked) {
        type = Programming.value;
    }
    if (Cooking.checked) {
        type = Cooking.value;
    }
    let bookname =  localStorage.getItem("bookname");
    let authorname =  localStorage.getItem("authorname");
    let booktype =  localStorage.getItem("booktype");
    if((bookname==null)||(authorname==null)||(booktype==null)){
         booknameObj=[];
         authornameObj=[];
         booktypeObj=[];
    }
    else{
        booknameObj=JSON.parse(bookname);
        authornameObj=JSON.parse(authorname);
        booktypeObj=JSON.parse(booktype)
    }
        booknameObj.push(name.value);
        authornameObj.push(author.value);
        booktypeObj.push(type);
        localStorage.setItem("bookname", JSON.stringify(booknameObj));
        localStorage.setItem("authorname", JSON.stringify(authornameObj));
        localStorage.setItem("booktype", JSON.stringify(booktypeObj));
        name.value = "";
        author.value = "";
        showbooks();
    // let book = new Book(name, author, type);
    // console.log(book);
    // let display = new Display();
    // display.add(book);
    // display.clear();
    // console.log("submited");
}

function showbooks() {
    let bookname =  localStorage.getItem("bookname");
    let authorname =  localStorage.getItem("authorname");
    let booktype =  localStorage.getItem("booktype");
    if((bookname==null)||(authorname==null)||(booktype==null)){
         booknameObj=[];
         authornameObj=[];
         booktypeObj=[];
    }
    else{
        booknameObj=JSON.parse(bookname);
        authornameObj=JSON.parse(authorname);
        booktypeObj=JSON.parse(booktype)
    }
    let tablebody=document.getElementById("tablebody");
    let uistring="";
    for (let i = 0; i < booknameObj.length; i++) {
        uistring +=`
    <tr>                 
        <td>${booknameObj[i]}</td>
         <td>${authornameObj[i]}</td>
        <td>${booktypeObj[i]}</td>
        <td><a onclick="deletenote(this.id)" id="${i}" class="btn btn-primary rembtn">Delete Note</a></td>
    </tr>`;
        
    }
    tablebody.innerHTML=uistring;
    
}
function deletenote(index) {
    let bookname =  localStorage.getItem("bookname");
    let authorname =  localStorage.getItem("authorname");
    let booktype =  localStorage.getItem("booktype");
    if((bookname==null)||(authorname==null)||(booktype==null)){
         booknameObj=[];
         authornameObj=[];
         booktypeObj=[];
    }
    else{
        booknameObj=JSON.parse(bookname);
        authornameObj=JSON.parse(authorname);
        booktypeObj=JSON.parse(booktype)
    }
    booknameObj.splice(index, 1);
    authornameObj.splice(index,1);
    booktypeObj.splice(index,1);
    localStorage.setItem("bookname", JSON.stringify(booknameObj));
    localStorage.setItem("authorname", JSON.stringify(authornameObj));
    localStorage.setItem("booktype", JSON.stringify(booktypeObj));
    showbooks();
}