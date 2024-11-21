//your JS code here. If required.
const btn = document.querySelector('#btn');
const ageInput = document.querySelector('#age');
const nam = document.querySelector('#name');

btn.addEventListener("click", (event)=>{
    event.preventDefault(); 
    const age = parseInt(ageInput.value);
    const name = nam.value;
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(age >18){
                resolve();
            } 
            else{
                reject()
            }
        },4000);
    })
    .then(()=>{
            alert(`Welcome, ${name}. You can vote.`);
        })
        .catch(()=>{
            alert(`Oh sorry ${name}. You aren't old enough.`);
        });
