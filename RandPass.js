let passDiv = document.querySelector(".pass");

document.querySelector(".btn").addEventListener('click', function() {
    let charset = document.querySelector(".inp").value;
    let length = Number(document.querySelector(".how").value)
    let pass = "";

    console.log(charset)
    console.log(length)

    for (let i = 0; i < length; i++) {
        pass += charset[Math.floor(Math.random() * charset.length)]
    }

    passDiv.innerHTML = `<li>${pass}</li>`;
    console.log(pass)
    return pass;
})