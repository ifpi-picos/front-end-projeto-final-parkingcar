
function changeEndPoint() {
    const auth = {
        username: document.getElementById('login-username').value,
        password: document.getElementById('login-password').value,
    }
    if (auth.username === 'Admin') {
        location.href = '/pages/admin/dashboard.html'
    } else if (auth.username === 'Gestor') {
        location.href = '/pages/gestor/dashboard.html'
    } 
    else {
        location.href = '/pages/funcionario/form/entrada-saida.html';
    }
}

document.addEventListener('submit', event => {
    event.preventDefault();
    changeEndPoint();
});
