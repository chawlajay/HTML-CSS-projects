const now = new Date();
const options = { hour: 'numeric', minute: 'numeric', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.querySelector(".date").innerHTML = now.toLocaleDateString('en-US',options);