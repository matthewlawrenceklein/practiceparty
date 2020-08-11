//////////////
// json-server --watch db.json
//////////


function main(){
    loadParties()
    formListener()
}

function loadParties(){

    fetch('http://localhost:3000/party')
        .then(resp => resp.json())
        .then(partyData => {
            partyData.forEach(party => renderParty(party))
            likeListener()
        })
}


function renderParty(party){

    let div = document.getElementById('party-zone')
    let partyInfo = document.createElement('div')
    
    partyInfo.innerHTML = ` a party called ${party.name}, a ${party.type} party <button id="like-btn" data-id=${party.id}> LIKE THIS PARTY </button> this party has <span id="likes-num">${party.likes}</span> likes! <hr>`


    div.append(partyInfo)
}


function formListener(){

    const form = document.querySelector('form')
    form.addEventListener('submit', function(event){

        event.preventDefault()

        const newParty = {
            name: event.target['name'].value,
            type: event.target['type'].value,
            byo: event.target['byo'].value,
            likes: 0 
          }
      
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
        },
            body: JSON.stringify(newParty)
        }

        fetch('http://localhost:3000/party', reqObj)
            .then(resp => resp.json())
            .then(partyData => {
                renderParty(partyData)
            })
    })
}


function likeListener(){

        // locate button in DOM
        // add event listener to button 
    // create req obj PATCH 
    // fetch req
    // update DOM with returned fetch data 

    const div = document.getElementById('party-zone')

    div.addEventListener('click', function(event){

        if(event.target.id === 'like-btn'){
            console.log(event.target.dataset.id);

            if (party.id === event.target.dataset.id){
                party.likes += 1
            }

        }

        // const reqObj = {
        //     method: 'PATCH',
        //     headers: {
        //         'Content-Type': 'application/json'
        // },
        //     body: JSON.stringify(newParty)
        // }

    })

}





main()