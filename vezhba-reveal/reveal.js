document.getElementById("reveal").addEventListener("click", reveal);

function reveal() {
  if (document.getElementById("password").type === "password") {
    document.getElementById("password").type = "text";
    document.getElementById("revealImage").src = "Images/eye.svg";
  } else {
    document.getElementById("password").type = "password";
    document.getElementById("revealImage").src = "Images/eye-alt.svg";
  }
}
