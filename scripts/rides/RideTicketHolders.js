const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", event => {
        contentTarget.innerHTML += `<div class="person rider"></div>`
    })
}

