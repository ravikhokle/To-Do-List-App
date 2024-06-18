const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");


item.addEventListener(
    "keyup", 
    (event) =>{
        if(event.key == "Enter"){
            addToDo(item.value);
            saveLS();
            item.value = "";
        }
    }
)

const addToDo = (data) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    ${data}
    <i class="fa-solid fa-x"></i>
    `;

    listItem.addEventListener("click",() => {
        listItem.classList.toggle("done");
    })

    listItem.querySelector("i").addEventListener("click",()=> {
        listItem.remove();
        saveLS();
    })

    toDoBox.appendChild(listItem);
}

(function(){
    const lsCheck = JSON.parse(localStorage.getItem("To-Do-List"))
    if(lsCheck!==null){
        lsCheck.forEach((data)=>{
            addToDo(data);
        })
    }
})();

const saveLS = () =>{
    const getdata = document.querySelectorAll("#to-do-box li");
    const lcdata = [];
    getdata.forEach((todo) => {
        lcdata.push(todo.innerText);
    });
    
    if(lcdata.length === 0){
        localStorage.removeItem("To-Do-List");
    }else{
        localStorage.setItem("To-Do-List", JSON.stringify(lcdata));
    }
}
