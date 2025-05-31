document.addEventListener("DOMContentLoaded", () => {
  // Sign In
  const openSignIn = document.getElementById("openSignIn");
  const signInModal = document.getElementById("signInModal");
  const closeSignIn = document.getElementById("closeSignIn");

  openSignIn?.addEventListener("click", (e) => {
    e.preventDefault();
    signInModal?.classList.remove("hidden");
  });

  closeSignIn?.addEventListener("click", () => {
    signInModal?.classList.add("hidden");
  });

  // Sign Up
  const openSignUp = document.getElementById("openSignUp");
  const signUpModal = document.getElementById("signUpModal");
  const closeSignUp = document.getElementById("closeSignUp");

  openSignUp?.addEventListener("click", (e) => {
    e.preventDefault();
    signUpModal?.classList.remove("hidden");
  });

  closeSignUp?.addEventListener("click", () => {
    signUpModal?.classList.add("hidden");
  });

  // Dismiss modals when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === signInModal) signInModal?.classList.add("hidden");
    if (e.target === signUpModal) signUpModal?.classList.add("hidden");
  });

  // ✅ Sign Up Form Submission
  const signUpForm = document.getElementById("signUpForm");
  const passwordInput = document.getElementById("signup-password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const passwordError = document.getElementById("password-error");

  signUpForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (password !== confirmPassword) {
      passwordError.textContent = "Passwords do not match.";
      passwordError.style.display = "block";
    } else {
      passwordError.style.display = "none";
      // ✅ Redirect to main.html
      window.location.href = "challenges/main.html"; // ✅ FIXED SPELLING
    }
  });

  // ✅ Sign In Form Submission
  const signInForm = document.getElementById("signInForm");
  const signInUsername = document.getElementById("signin-username");
  const signInPassword = document.getElementById("signin-password");
  const signInError = document.getElementById("signin-error");

  signInForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = signInUsername.value.trim();
    const password = signInPassword.value.trim();

    if (username === "" || password === "") {
      signInError.textContent = "Please enter both username and password.";
      signInError.style.display = "block";
    } else {
      signInError.style.display = "none";
      // ✅ Redirect to main.html
      window.location.href = "challenges/main.html"; // ✅ FIXED SPELLING
    }
  });
});


// Sign In Form Submission
document.getElementById("signInForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission
  // You can add validation here if needed
  window.location.href = "challenges/main.html";
});

// Sign Up Form Submission
document.getElementById("signUpForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  const password = document.getElementById("signup-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    document.getElementById("password-error").textContent = "Passwords do not match.";
    document.getElementById("password-error").style.display = "block";
    return;
  }

  // You can add additional validation or logic here

  window.location.href = "challenges/main.html";
});