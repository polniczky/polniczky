document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Az üzenet sikeresen elküldve!");
});
function getUser() {
    fetch("https://randomuser.me/api/")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        console.log(data);
        document.getElementById("full-name").textContent = `${data.results[0].name.first} ${data.results[0].name.last}`;
        document.getElementById("image").src = `${data.results[0].picture.large}`;
        if (data.results[0].gender == "female") {
            document.getElementById("gender").textContent = "Nő";
        } else if (data.results[0].gender == "male") {
            document.getElementById("gender").textContent = "Férfi";
        } else {
            document.getElementById("gender").textContent = "Egyéb";
        }
        document.getElementById("birth-date").textContent = data.results[0].dob.date.split("T")[0]
        document.getElementById("address").textContent = `${data.results[0].location.postcode} ${data.results[0].location.city}, ${data.results[0].location.street.name} ${data.results[0].location.street.number}`
        document.getElementById("phone").textContent = data.results[0].phone
        document.getElementById("email").textContent = data.results[0].email
    });
  }

getUser();
