// select the form elements

const formSection  = document.querySelector("#form-section")
const userName  = document.querySelector("#name")
const maritalStatus  = document.querySelector("#marital-status")
const age  = document.querySelector("#age")
const dependent  = document.querySelector("#dependent")
const salary  = document.querySelector("#salary")
const otherIncome  = document.querySelector("#income")
const electricity  = document.querySelector("#electricity")
const transport  = document.querySelector("#transport")
const child  = document.querySelector("#child")
const food  = document.querySelector("#food")
const cloth  = document.querySelector("#cloth")
const health  = document.querySelector("#health")
const grooming  = document.querySelector("#grooming")
const gas  = document.querySelector("#gas")
const dependentBill  = document.querySelector("#dependentBill")
const childSaving  = document.querySelector("#child-saving")
const saving  = document.querySelector("#saving")
const calBtn  = document.querySelector("#cal-btn")

// Select the results elements
const resultDisplay  = document.querySelector("#result-display")
const result  = document.querySelector("#result")
const userNameResult  = document.querySelector("#userName")
const userAge  = document.querySelector("#userAge")
const userDependent  = document.querySelector("#userDependent")
const userTotal  = document.querySelector("#userTotal")
const electBill  = document.querySelector("#elect-bill")
const usertransport  = document.querySelector("#usertransport")
const userChild  = document.querySelector("#userChild")
const userFood  = document.querySelector("#userFood")
const userClothing  = document.querySelector("#userClothing")
const userHealth  = document.querySelector("#userHealth")
const usergrooming  = document.querySelector("#usergrooming")
const usergas  = document.querySelector("#usergas")
const userStatus  = document.querySelector("#userStatus")
const userChildSaving  = document.querySelector("#userChildSaving")
const userPersonalSaving  = document.querySelector("#userPersonalSaving")
const resetBtn  = document.querySelector("#reset-btn")
const userBalance  = document.querySelector("#userBalance")

// Function to hide the results display immediately the document loads

window.addEventListener("DOMContentLoaded", ()=>{
    resultDisplay.classList.add("removeDisplay")
})

// Function to calculate the percenetages of each bill

const calPercentage = (amount=0, totalAmount=0)=>{
    const result  = (amount / totalAmount) *   100 
return `${result.toFixed(2)}%`
}

// function to get the user inputs and also calculate the remaining balance
const getUserInputs = ()=>{
const totalAmount = Number(salary.value) + Number(otherIncome.value)

const electricityPercent = calPercentage(Number(electricity.value.trim()), totalAmount)
const transportPercent = calPercentage(Number(transport.value), totalAmount)
const childPercent = calPercentage(Number(child.value), totalAmount)
const foodPercent = calPercentage(Number(food.value), totalAmount)
const clothPercent = calPercentage(Number(cloth.value), totalAmount)
const healthPercent = calPercentage(Number(health.value), totalAmount)
const groomingPercent = calPercentage(Number(grooming.value), totalAmount)
const gasPercent = calPercentage(Number(gas.value), totalAmount)
const childSavingPercent = calPercentage(Number(childSaving.value), totalAmount)
const savingPercent = calPercentage(Number(saving.value), totalAmount)
const userDependendentsBill = Number(dependent.value ) * Number(dependentBill.value)
const userDendependentPercentage = calPercentage(userDependendentsBill, totalAmount)



// calculate the total remaining balance

const remainingBalance  = totalAmount - (Number(electricity.value ) + Number(transport.value) + Number(child.value) + Number(food.value) + Number(cloth.value) + Number(health.value) + Number(grooming.value) + Number(gas.value) + Number(childSaving.value) + Number(childSaving.value) + Number(saving.value) + userDependendentsBill)

userNameResult.innerHTML  = `Name:<span>${userName.value}</span>    `
userStatus.innerHTML = `Marital Status:<span>${maritalStatus.value}</span>`
userAge.innerHTML = `Age:<span>${age.value}</span>`
userTotal.innerHTML = `Total: <span>₦${totalAmount}</span>`
userDependent.innerHTML = `Dependents Bill: ( ₦${userDependendentsBill} ) <span>${userDendependentPercentage}</span>`

electBill.innerHTML = `Electricity Bill: ( ₦${electricity.value} ) <span>${electricityPercent}</span>`

usertransport.innerHTML = `Transportation: ( ₦${transport.value} ) <span>${transportPercent}</span>`
userChild.innerHTML =`Child/Children Care: ( ₦${child.value} ) <span>${childPercent}</span>`

userFood.innerHTML = `Food Stuff: ( ₦${food.value} ) <span>${foodPercent}</span>`

userClothing.innerHTML = `Clothing: ( ₦${cloth.value} ) <span>${clothPercent}</span>`

userHealth.innerHTML = `Personal Health:: ( ₦${health.value} ) <span>${healthPercent}</span>`
usergrooming.innerHTML = `Beauty and Grooming: ( ₦${grooming.value} ) <span>${groomingPercent}</span>`

usergas.innerHTML = `Gas: ( ₦${gas.value} ) <span>${gasPercent}</span>`
userChildSaving.innerHTML = `Child Saving: ( ₦${childSaving.value} ) <span>${childSavingPercent}</span>`
userPersonalSaving.innerHTML = `Personal Saving: ( ₦${saving.value} ) <span>${savingPercent}</span>`

userBalance.innerHTML = `Remaining Balance: <span>₦${remainingBalance}</span>`


}

// Click evend to get call the getUsersInput function

calBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    getUserInputs()

    formSection.classList.add("removeDisplay")
    resultDisplay.classList.remove("removeDisplay")

})
// Event to perform the calculation again

resetBtn.addEventListener("click",()=>{
    formSection.classList.remove("removeDisplay")
    resultDisplay.classList.add("removeDisplay") 
})
