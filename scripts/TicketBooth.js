let ticketsSold = 0
const ticketTarget = document.querySelector(".customers")
const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", event => {
    if(event.target.id === "rideTicket") {
        const rideEvent = new CustomEvent("rideTicketPurchased")
        ticketsSold++
        totalTickets();
        eventHub.dispatchEvent(rideEvent)
    }
})

eventHub.addEventListener("click", event => {
    if(event.target.id === "foodTicket") {
        const foodEvent = new CustomEvent("foodTicketPurchased")
        ticketsSold++
        totalTickets();
        eventHub.dispatchEvent(foodEvent)
    }
})

eventHub.addEventListener("click", event => {
    if(event.target.id === "gameTicket") {
        const gameEvent = new CustomEvent("gameTicketPurchased")
        ticketsSold++
        totalTickets();
        eventHub.dispatchEvent(gameEvent)
    }
})

eventHub.addEventListener("click", event => {
    if(event.target.id === "sideshowTicket") {
        const sideshowEvent = new CustomEvent("sideshowTicketPurchased")
        ticketsSold++
        totalTickets();
        eventHub.dispatchEvent(sideshowEvent)
    }
})

eventHub.addEventListener("click", event => {
    if(event.target.id === "fullTicket") {
        const fullEvent = new CustomEvent("fullTicketPurchased")
        ticketsSold++
        totalTickets();
        eventHub.dispatchEvent(fullEvent)
    }
})

export const TicketBooth = () => {
    totalTickets()
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="foodTicket">Food Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="gameTicket">Game Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="sideshowTicket">Sideshow Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="fullTicket">Full Package Ticket</button>
        </div>
    `
}

const totalTickets = () => {
    ticketTarget.innerHTML = `Total tickets purchased: ${ticketsSold}`
}