const input=document.querySelector(`#input`);
const button=document.querySelector(`#button`);
const counter=document.querySelector("span");
const list=document.querySelector(`.list`);
 
function renumberItem(){
    let item=list.children;
    for(let i=0;i<item.length;i++){
        let number=item[i].querySelector(".number");
        number.textContent=`${i+1}.`;
    }
}

let count=0;
function addItem(){
    let output=input.value;
    count++;
    counter.textContent=`${count}`;
    let item=document.createElement("li");
    let element=document.createElement("span");
    element.textContent=`${output}`;
    list.appendChild(item);
      let number=document.createElement("span");
    number.classList.add("number");
     item.appendChild(number);
    item.appendChild(element);
    let remove=document.createElement(`button`);
    remove.textContent=`DELETE`;
     element.appendChild(remove);
    let edit=document.createElement(`button`);
    edit.textContent=`EDIT`;
    element.appendChild(edit);
    renumberItem();
    input.value=``;
 
   remove.addEventListener(`click`,()=>{
        count--;
        item.remove();
        renumberItem();
        counter.textContent=`${count}`;
     
   })
   edit.addEventListener(`click`,()=>{
    let modify=(prompt(`Enter the item`));
    if(modify!==``){
        element.textContent=`${modify}`;
        element.appendChild(remove);
        element.appendChild(edit);
    }
    else if(modify===null){
            
    }
    else{

    }
   })

}

 button.addEventListener(`click`,()=>{
    if(input.value!==``){
    addItem();
    }
})
document.addEventListener(`keydown`,(event)=>{
    if(input.value!==``){
    if(event.key===`Enter`){
        addItem();
    }
}
})