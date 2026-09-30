// Auto-update the copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// ---------------------------------------------------------------
// Extension point: add future functionality here.
// The <div id="extra-content"></div> in index.html is an empty
// slot you can fill with new features. Examples below (commented
// out) show how to hook in an email signup form or a countdown.
// ---------------------------------------------------------------

/*
// Example: Email signup
function renderSignupForm() {
  const container = document.getElementById("extra-content");
  container.innerHTML = `
    <form class="signup-form" id="signup-form">
      <input type="email" id="email-input" placeholder="you@example.com" required />
      <button type="submit">Notify me</button>
    </form>
  `;

  document.getElementById("signup-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email-input").value;
    // TODO: send `email` to your backend or a service like Mailchimp/Formspree
    console.log("Signed up:", email);
  });
}
renderSignupForm();
*/

/*
// Example: Countdown timer
function renderCountdown(targetDate) {
  const container = document.getElementById("extra-content");
  container.innerHTML = `<div class="countdown" id="countdown"></div>`;

  function update() {
    const diff = new Date(targetDate) - new Date();
    if (diff <= 0) {
      document.getElementById("countdown").textContent = "We're live!";
      return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    document.getElementById("countdown").textContent = `${days}d ${hours}h remaining`;
    requestAnimationFrame(update);
  }
  update();
}
renderCountdown("2026-12-01T00:00:00");
*/
