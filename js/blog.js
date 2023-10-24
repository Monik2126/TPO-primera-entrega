const listaUsuarios = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    let tablaBlog = ``;
    users.forEach((user, index) => {
        tablaBlog += `<tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.website}</td>
        </tr>`;
    });
    // document.getElementById("tabla_usuarios").innerHTML = tablaBlog;
    tabla_usuarios.innerHTML = tablaBlog;
};

window.addEventListener("load", function () {
    listaUsuarios();
});
