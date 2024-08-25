const checkBoxList = document.querySelectorAll('.custom-checkbox')
const inputBox = document.querySelectorAll('.goal-input')
const errorLebel =  

checkBoxList.forEach((checkbox) =>{
    checkbox.addEventListener('click', (e)=>{
        const allInput = [...inputBox].every(function(input){
            return input.value
        })
    // console.log(allInput)
    if(allInput){
    
    checkbox.parentElement.classList.toggle('completed')
    }
    })
})

