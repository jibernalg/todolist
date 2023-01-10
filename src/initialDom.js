import { createRows } from "./createRows";

export function initialDom(){
    let myList=[];    
    //create container
    const main=document.createElement("div");
    main.classList.add("main");
    document.body.appendChild(main);

    //create upper bar
    const upperBar=document.createElement("div");
    upperBar.classList.add("upper-bar");
    main.appendChild(upperBar);

    const title=document.createElement("h1");
    title.classList.add("title");
    title.innerText="Rememberize";
    upperBar.appendChild(title);
    
    //create table
    const table=document.createElement("table");
    table.classList.add("table");
    main.appendChild(table);

    //create thead
    const thead=document.createElement("thead");
    table.appendChild(thead);

    //create headlines
    const tr = document.createElement('tr');
    thead.appendChild(tr);

    const th1 = document.createElement('th');
    th1.innerHTML="Description";
    tr.appendChild(th1);

    const th2 = document.createElement('th');
    th2.innerHTML="Start Date";
    tr.appendChild(th2);

    const th3 = document.createElement('th');
    th3.innerHTML="Due Date";
    tr.appendChild(th3);

    const th4 = document.createElement('th');
    th4.innerHTML="Estimated Hours";
    tr.appendChild(th4);

    const th5 = document.createElement('th');
    th5.innerHTML="Status";
    tr.appendChild(th5);

    const th6 = document.createElement('th');
    th6.innerHTML="Action";
    tr.appendChild(th6);

    //create tbody
    const tbody=document.createElement("tbody");
    table.appendChild(tbody);

    //load localStorage
    let defaultmyList=[];
    let myList2 = JSON.parse(window.localStorage.getItem("myList"))|| defaultmyList;

    for (const object of myList2){

        const row = document.createElement('tr');
        row.classList.add('toDoAct');
        
        const descrText = row.insertCell();
        const startText = row.insertCell();
        const dueText = row.insertCell();
        const expText = row.insertCell();
        const staText = row.insertCell();
        
        descrText.innerHTML = object.descrText;
        startText.innerHTML = object.startText;
        dueText.innerHTML = object.dueText;
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
    

    //create inputs
    const inputRow = document.createElement('tr');
    inputRow.classList.add("inputRow");
    tbody.appendChild(inputRow);

    const td1 = document.createElement('td');
    const inputDescr=document.createElement("input");
    inputDescr.setAttribute("id","description");
    inputDescr.setAttribute("type","text");
    inputRow.appendChild(td1);
    td1.appendChild(inputDescr);
    
    const td2 = document.createElement('td');
    const inputStart=document.createElement("input");
    inputStart.setAttribute("id","startDate");
    inputStart.setAttribute("type","date");
    inputRow.appendChild(td2);
    td2.appendChild(inputStart);

    const td3 = document.createElement('td');
    const inputDue=document.createElement("input");
    inputDue.setAttribute("id","dueDate");
    inputDue.setAttribute("type","date");
    inputRow.appendChild(td3);
    td3.appendChild(inputDue);

    const td4 = document.createElement('td');
    const inputExp=document.createElement("input");
    inputExp.setAttribute("id","time");
    inputExp.setAttribute("type","number");
    inputRow.appendChild(td4);
    td4.appendChild(inputExp);

    const td5 = document.createElement('td');
    const options=document.createElement("select");
    const option0=document.createElement("option");
    const option1=document.createElement("option");
    const option2=document.createElement("option");
    const option3=document.createElement("option");
    
    options.setAttribute("id","status");
    option0.textContent=""
    option1.textContent="Not started"
    option2.textContent="In process"
    option3.textContent="Finalized";

    inputRow.appendChild(td5);
    td5.appendChild(options);
    options.appendChild(option0);
    options.appendChild(option1);
    options.appendChild(option2);
    options.appendChild(option3);
    
    
    const td6 = document.createElement('button');
    td6.classList.add("btn");
    td6.setAttribute('id','createBtn');
    td6.innerHTML="Create";
    inputRow.appendChild(td6);
    

    td6.addEventListener('click',function(){       
        createRows();    
    });
};