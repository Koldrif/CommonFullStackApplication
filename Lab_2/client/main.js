const sendFormAddress = "http://localhost:5176/SendRequest";
const sendGetFormAddress = "http://localhost:5176/";


async function SendForm()
{
    let user = {
        Name : "",
        Surname : "",
        Age : -1,
        Sex : 2
    }

    user.Name = document.getElementById("name").value;
    user.Surname = document.getElementById("second-name").value;
    user.Age = parseInt(document.getElementById("age").value, 10);
    user.Sex = parseInt(document.getElementById("sex-select").value, 10);


    XhrSendPost(user)
}

function XhrSendPost(data)
{
    // let xhr = new XMLHttpRequest();
    // xhr.open("POST", sendFormAddress)
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.send(data)

    var form = {
        Name: "John",
        Surname: "Doe",
        Age: 30,
        Sex: 1
    };

    var ss = JSON.stringify(data);

    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', sendFormAddress, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log("Запрос успешно выполнен");
        } else {
            console.error("Ошибка при выполнении запроса:", xhr.status, xhr.statusText);
        }
    };
    
    xhr.onerror = function () {
        console.error("Произошла ошибка при выполнении запроса");
    };
    
    var jsonPayload = JSON.stringify(data);
    xhr.send(jsonPayload);
}
