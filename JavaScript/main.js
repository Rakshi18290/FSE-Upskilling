console.log("Welcome to the Community Portal");

window.onload = () => {
  alert("Page fully loaded!");

  const phoneField = document.getElementById("phone");
  phoneField.onblur = () => {
    if (!/^[0-9]{10}$/.test(phoneField.value)) {
      alert("Invalid phone number. Must be 10 digits.");
    }
  };

  const eventType = document.getElementById("eventType");
  eventType.onchange = () => {
    alert("Event fee for " + eventType.value + " is $10.");
    localStorage.setItem("preferredEvent", eventType.value);
  };

  const registerForm = document.getElementById("eventForm");
  registerForm.onsubmit = (e) => {
    e.preventDefault();
    document.getElementById("formOutput").textContent = "Registration submitted successfully!";
  };

  const promoVideo = document.getElementById("promoVideo");
  promoVideo.oncanplay = () => {
    document.getElementById("videoStatus").textContent = "Video ready to play.";
  };

  window.onbeforeunload = () => {
    return "Are you sure you want to leave? Your form data may not be saved.";
  };

  document.getElementById("messageBox").onkeyup = (e) => {
    console.log("Characters typed: " + e.target.value.length);
  };
};
