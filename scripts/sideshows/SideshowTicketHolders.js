const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const SideshowTicketHolders = () => {
    eventHub.addEventListener("sideshowTicketPurchased", event => {
        contentTarget.innerHTML += `<div class="person gawker"></div>`
    })
}