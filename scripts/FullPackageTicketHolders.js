const contentTarget = document.getElementsByClassName("people")
const eventHub = document.querySelector("#state-fair")

export const FullTicketHolders = () => {
    eventHub.addEventListener("fullTicketPurchased", event => {
        for (let i=0; i<contentTarget.length; i++) {
            contentTarget[i].innerHTML += `<div class="person bigSpender"></div>`
        }
    })
}