// Waits for the user to click the "Search Flights" button
document.getElementById("flightForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stops the page from reloading

    // Gets the user’s input values (origin, destination, and date)
    const origin = document.getElementById("origin").value;
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;

    // Simulated flight results (Fake data for now)
    const flights = [
        { time: "10:00 AM", price: "$250", availability: "Available" },
        { time: "2:30 PM", price: "$300", availability: "Limited Seats" },
        { time: "6:45 PM", price: "$200", availability: "Sold Out" }
    ];

    // Creates a title for the results
    let resultsHTML = `<h2>Flights from ${origin} to ${destination} on ${date}:</h2>`;

    // Loops through each fake flight and adds it to the page
    flights.forEach(flight => {
        resultsHTML += `
            <div class="flight-card">
                <p><strong>Time:</strong> ${flight.time}</p>
                <p><strong>Price:</strong> ${flight.price}</p>
                <p><strong>Availability:</strong> ${flight.availability}</p>
            </div>
        `;
    });

    // Displays the results inside the "flightResults" section
    document.getElementById("flightResults").innerHTML = resultsHTML;
});
