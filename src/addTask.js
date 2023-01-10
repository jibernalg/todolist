export function addTask(descrText,startText,dueText,expText,staText){
    class Task {
        constructor(descrText, startText,dueText,expText,staText) {
            this.descrText=descrText;
            this.startText=startText;
            this.dueText=dueText;
            this.expText=expText;
            this.staText=staText;  
        }
    }
    const newTask= new Task(descrText,startText,dueText,expText,staText);
    
    let defaultmyList=[];
    let myList = JSON.parse(window.localStorage.getItem("myList"))|| defaultmyList;
    
    myList.push(newTask);

    const myListAsString=JSON.stringify(myList);
    localStorage.setItem('myList',myListAsString);
}


