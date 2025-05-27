// 1. Basics & Setup
console.log("Welcome to the Community Portal");

window.onload = () => {
  alert("Page fully loaded!");

  // 2. Syntax, Data Types, Operators
  const eventName = "Community Yoga Workshop";
  const eventDate = "2025-06-15";
  let seats = 10;
  console.log(`Event: ${eventName} on ${eventDate}. Seats left: ${seats}`);

  // 3. Conditionals, Loops, Error Handling
  const events = [
    { name: "Yoga Workshop", date: "2025-06-15", seats: 10, category: "Wellness" },
    { name: "Music Fest", date: "2025-05-10", seats: 0, category: "Music" },
    { name: "Art Fair", date: "2025-06-20", seats: 5, category: "Art" }
  ];

  const today = new Date().toISOString().split("T")[0];
  events.forEach(event => {
    if (event.date >= today && event.seats > 0) {
      console.log(`Upcoming: ${event.name} (${event.category})`);
    } else {
      console.log(`Event ${event.name} is either past or full.`);
    }
  });

  // 4. Functions, Closures, Higher-Order Functions
  function addEvent(eventObj) {
    events.push(eventObj);
  }

  function registerUser(eventName) {
    const event = events.find(e => e.name === eventName);
    try {
      if (event && event.seats > 0) {
        event.seats--;
        totalRegistrations[event.category]();
        alert(`Registered for ${eventName}. Seats left: ${event.seats}`);
      } else {
        throw new Error("Event full or not found.");
      }
    } catch (error) {
      alert(error.message);
    }
  }

  function filterEventsByCategory(category, callback) {
    const filtered = events.filter(e => e.category === category);
    callback(filtered);
  }

  // Closure to track total registrations
  const totalRegistrations = {};
  events.forEach(event => {
    if (!totalRegistrations[event.category]) {
      let count = 0;
      totalRegistrations[event.category] = () => {
        count++;
        console.log(`Total registrations for ${event.category}: ${count}`);
      };
    }
  });

  // 5. Objects and Prototypes
  function Event(name, date, seats, category) {
    this.name = name;
    this.date = date;
    this.seats = seats;
    this.category = category;
  }
  Event.prototype.checkAvailability = function () {
    return this.seats > 0;
  };

  const artEvent = new Event("Art Class", "2025-07-01", 15, "Art");
  console.log(Object.entries(artEvent));

  // 6. Arrays and Methods
  events.push({ name: "Dance Night", date: "2025-06-25", seats: 20, category: "Music" });
  const musicEvents = events.filter(e => e.category === "Music");
  console.log("Music Events:", musicEvents);

  const eventCards = events.map(e => `Event: ${e.name} (${e.category})`);
  console.log("Cards:", eventCards);

  // 7. DOM Manipulation
  const container = document.getElementById("eventsContainer");
  if (container) {
    container.innerHTML = ""; // Clear container
    events.forEach(event => {
      if (event.date >= today && event.seats > 0) {
        const card = document.createElement("div");
        card.textContent = `${event.name} - ${event.category} - Seats: ${event.seats}`;
        const regBtn = document.createElement("button");
        regBtn.textContent = "Register";
        regBtn.onclick = () => registerUser(event.name);
        card.appendChild(regBtn);
        container.appendChild(card);
      }
    });
  }

  // 8. Event Handling

  // Phone validation on blur: show alert if digits < 10 or invalid
  const phoneInput = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");

phoneInput.onblur = () => {
  const phone = phoneInput.value.trim();
  if (!/^\d{10}$/.test(phone)) {
    phoneError.textContent = "Number is invalid. Must be exactly 10 digits.";
    phoneInput.style.borderColor = "red";
  } else {
    phoneError.textContent = "";
    phoneInput.style.borderColor = "";
  }
};


  // Email validation on blur: alert if '@' missing
  const emailInput = document.querySelector('input[name="email"]');
  if (emailInput) {
    emailInput.onblur = () => {
      const email = emailInput.value.trim();
      if (!email.includes("@")) {
        alert("Please enter a correct email address");
      }
    };
  }

  // Event type select change
  const eventTypeSelect = document.getElementById("eventType");
  if (eventTypeSelect) {
    eventTypeSelect.onchange = (e) => {
      alert("Event fee for " + e.target.value + " is $10.");
      localStorage.setItem("preferredEvent", e.target.value);
    };
  }

  // Form submission validation
  const form = document.getElementById("eventForm");
  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const name = form.elements["name"].value.trim();
      const email = form.elements["email"].value.trim();
      const phone = form.elements["phone"].value.trim();

      if (!name || !email) {
        alert("Please fill in all fields!");
        return;
      }
      if (!email.includes("@")) {
        alert("Please enter a correct email address");
        return;
      }
      if (phone.length < 10 || !/^\d{10}$/.test(phone)) {
        alert("Number is invalid");
        return;
      }
      document.getElementById("formOutput").textContent = "Registration submitted successfully!";
      console.log("Form submitted:", { name, email, phone });
    };
  }

  // Promo Video canplay event
  const promoVideo = document.getElementById("promoVideo");
  if (promoVideo) {
    promoVideo.oncanplay = () => {
      document.getElementById("videoStatus").textContent = "Video ready to play.";
    };
  }

  // Confirm on page unload
  window.onbeforeunload = () => "Are you sure you want to leave?";

  // Message box keyup logging
  const messageBox = document.getElementById("messageBox");
  if (messageBox) {
    messageBox.onkeyup = (e) => {
      console.log("Characters typed: " + e.target.value.length);
    };
  }

  // 9. Async JS, Promises, Async/Await
  function fetchEvents() {
    console.log("Loading events...");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        console.log("Fetched events:", data.slice(0, 5));
      })
      .catch(err => console.error(err));
  }
  fetchEvents();

  async function fetchEventsAsync() {
    console.log("Loading (async/await)...");
    const spinner = document.getElementById("spinner");
    if (spinner) spinner.style.display = "block";
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      console.log("Fetched (async):", data.slice(0, 5));
    } catch (error) {
      console.error(error);
    } finally {
      if (spinner) spinner.style.display = "none";
    }
  }
  // fetchEventsAsync();

  // 10. Modern JS Features
  const greetUser = (name = "Guest") => console.log(`Hello, ${name}!`);
  greetUser();

  const { name: firstEventName } = events[0];
  console.log("First event name:", firstEventName);

  const clonedEvents = [...events];
  console.log("Cloned Events:", clonedEvents);

  // 11. Working with Forms handled above (form submission)

  // 12. AJAX & Fetch API
  function postRegistration() {
    const user = { name: "John Doe", email: "john@example.com" };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-type": "application/json" }
    })
      .then(res => res.json())
      .then(data => {
        console.log("Registration submitted:", data);
        setTimeout(() => alert("Registration processed!"), 1000);
      });
  }
  // postRegistration();

  // 13. Debugging
  console.log("Debugging: Checking registration flow...");

  // 14. jQuery and JS Frameworks
  if (window.jQuery) {
    $("#registerBtn").click(() => alert("Registered with jQuery!"));
    $(".eventCard").fadeIn();
    $(".eventCard").fadeOut();
    console.log("React/Vue can make the portal more modular and performant.");
  }
};
