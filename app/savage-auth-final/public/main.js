//this will activate the button in index.ejs
const update = document.querySelector("#update-button");
const deleteButton = document.querySelector('#delete-button')
const messageDiv = document.querySelector('#message')

// event listener to start post handler function
update.addEventListener("click", (_) => {
  fetch("/quotes", {
    //this needs to match with the for loop in index.ejs and post directory in index.js
    method: "put",
    headers: { 'Content-Type': 'application/json' }, //tells mongo it is a json file
    body: JSON.stringify({  //turns the data into json
    name: 'Darth Vader',
    quote: 'I find your lack of faith disturbing.',
    }),
  })
  .then(res => {
    if (res.ok) return res.json()
  })  //get an ok from mongo and express if the update was successful
  .then(response => { //reloads after response
    window.location.reload(true)
  })
})
deleteButton.addEventListener('click', _ => {
  fetch('/quotes', {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Darth Vader'
    })
  })
    .then(res => res.json())
    .then (data => {
      if(data === "No quotes to delete"){
        messageDiv.textContent = 'NO MORE'
      }else{
      window.location.reload()
    }
  })
})