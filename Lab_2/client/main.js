const sendFormAddress = "http://localhost:5176/SendRequest"

async function SendForm()
{
    let user = {
        "Name" : "",
        "Surname" : "",
        "Age" : -1,
        "Sex" : 2
    }

    user.Name = document.getElementById("name");
    user.Surname = document.getElementById("second-name");
    user.Age = document.getElementById("age");
    user.Sex = document.getElementById("sex-select")

    const response = await fetch(sendFormAddress, {
        mode: "no-cors",
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(user)
    });
    const message = await response.json();
    document.getElementById("message").innerText = message.text;
}