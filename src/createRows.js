import { addTask } from './addTask';

export function createRows(){

    const tbody=document.querySelector("tbody");
    const inputRow=document.querySelector(".inputRow");

    const row = document.createElement('tr');
    row.classList.add('toDoAct');
    tbody.appendChild(row);

    const td1 = document.createElement('td');
    const descr=document.createElement("div");
    const descrText = document.getElementById("description").value;
    descr.innerHTML=descrText;
    //td1.appendChild(descr);
    //row.appendChild(td1);
    const description = document.getElementById("description");
    description.value="";
    
    
    const td2 = document.createElement('td');
    const start=document.createElement("div");
    const startText = document.getElementById("startDate").value;
    const dateS = new Date(startText);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit',timeZone: 'UTC' };
    const formattedDateS = new Intl.DateTimeFormat('en-GB', options).format(dateS);
    start.innerHTML=formattedDateS;
    //td2.appendChild(start);
    //row.appendChild(td2);
    const startDate = document.getElementById("startDate");
    startDate.value="";


    const td3 = document.createElement('td');
    const due=document.createElement("div");
    const dueText = document.getElementById("dueDate").value;
    const dateD = new Date(startText);
    const formattedDateD = new Intl.DateTimeFormat('en-GB', options).format(dateD);
    due.innerHTML=formattedDateD
    //td3.appendChild(due);
    //row.appendChild(td3);
    const dueDate = document.getElementById("dueDate");
    dueDate.value="";


    const td4 = document.createElement('td');
    const exp=document.createElement("div");
    const expText = document.getElementById("time").value;
    exp.innerHTML=expText
    //td4.appendChild(exp);
    //row.appendChild(td4);
    const time = document.getElementById("time");
    time.value="";


    const td5 = document.createElement('td');
    const sta=document.createElement("div");
    const staText = document.getElementById("status").value;
    sta.innerHTML=staText
    //td5.appendChild(sta);
    //row.appendChild(td5);
    const status = document.getElementById("status");
    status.value="";

    

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.classList.add('delete-button');
    //row.appendChild(deleteButton);
    

    addTask(descrText,startText,dueText,expText,staText);
    
    tbody.innerHTML = '';

    let myList2 = JSON.parse(window.localStorage.getItem("myList"));
    
    for (const object of myList2){

        const row = document.createElement('tr');
        row.classList.add('toDoAct');
        
        const descrText = row.insertCell();
        const startText = row.insertCell();
        const dueText = row.insertCell();
        const expText = row.insertCell();
        const staText = row.insertCell();

        const startDate = new Date(object.startText);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit',timeZone: 'UTC' };
        const formattedStartDate = new Intl.DateTimeFormat('en-GB', options).format(startDate);

        const dueDate = new Date(object.dueText);
        const formattedDueDate = new Intl.DateTimeFormat('en-GB', options).format(dueDate);

        
        descrText.innerHTML = object.descrText;
        startText.innerHTML = formattedStartDate;
        dueText.innerHTML = formattedDueDate;
        expText.innerHTML = object.expText;
        staText.innerHTML = object.staText;

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.classList.add('delete-button');
        row.appendChild(deleteButton);
        tbody.appendChild(row);

    }
    
    const deleteButtons=document.querySelectorAll('.delete-button');
    for(const button of deleteButtons){
        button.addEventListener('click',(event)=>{
            const row=event.target.parentNode;
            const index=Array.prototype.indexOf.call(row.parentNode.children,row);
            row.parentNode.removeChild(row);

            const taskArray=JSON.parse(localStorage.getItem('myList'));
            taskArray.splice(index,1);
            localStorage.setItem('myList',JSON.stringify(taskArray));
        });
    }
    

    tbody.appendChild(inputRow);   
}