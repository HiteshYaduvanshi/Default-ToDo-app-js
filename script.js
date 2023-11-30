document.addEventListener("DOMContentLoaded", function(){
    const toDoInput = document.getElementById("toDoInput");
    const addToDoBtn = document.getElementById("addToDoBtn");
    const toDoList = document.getElementById("toDoList");
    
    addToDoBtn.addEventListener("click", function(){
        const toDotext = toDoInput.value.trim();

        if(toDotext !== ""){
            const listItem = document.createElement("li");
            listItem.textContent = toDotext;

            const removeBtn = document.createElement("button");
            removeBtn.classList.add("remove_btn");
            removeBtn.textContent = "Delete";
            removeBtn.addEventListener("click", function(){
                listItem.remove();
            })

            listItem.appendChild(removeBtn);
            toDoList.appendChild(listItem);
            toDoInput.value = "";
        };
    });
});

























// document.addEventListener("DOMContentLoaded",function(){
//     const toDoInput = document.getElementById("toDoInput");
//     const addToDoBtn =document.getElementById("addToDoBtn");
//     const toDoList = document.getElementById("toDoList");

//     addToDoBtn.addEventListener("click",function(){
//         const toDotext = toDoInput.value;

//         if (toDotext !== ""){
//             const listItem = document.createElement("li");
//             listItem.textContent = toDotext;

//             const removeBtn = document.createElement("button");
//             removeBtn.textContent = "remove";
//             removeBtn.addEventListener("click",function(){
//                 listItem.remove();
//             });

//             listItem.appendChild(removeBtn);
//             toDoList.appendChild(listItem);
//             toDoInput.value = "";
//         }
//     })
// })




























// document.addEventListener("DOMContentLoaded", function(){
//     const toDoInput = document.getElementById("toDoInput");
//     const addToDoBtn = document.getElementById("addToDoBtn");
//     const toDoList = document.getElementById("toDoList");

//     addToDoBtn.addEventListener("click", function(){
//         const toDoText =toDoInput.value.trim();

//         if(toDoText !== ""){
//             const listitem = document.createElement("li");
//             listitem.textContent = toDoText;

//             const removeBtn = document.createElement("button");
//             removeBtn.textContent = "Remove";
//             removeBtn.classList.add("remove_btn");
//             removeBtn.addEventListener("click", function(){
//             listitem.remove();
//             })

//             listitem.appendChild(removeBtn);
//             toDoList.appendChild(listitem);
//             toDoInput.value = "";
//         }


//     })
// })