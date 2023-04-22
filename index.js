const form = document.getElementById("login-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const username = form.elements.username.value;
  const password = form.elements.password.value;

  if (username === "admin" && password === "12345") {
    redirectToMainPage();
  } else {
    alert("Incorrect username or password. Please try again.");
  }
});


function redirectToMainPage() {
  window.location.href = "main.html";
}