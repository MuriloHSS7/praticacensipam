function login(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ email, password})
    })
    .then(responde => responde.json())
    .then(data => {
        if(data.success){
            if(data.tipo === 'admin'){
                window.location.href = '/admin/home.html';
            } else {
                window.location.href = '/comum/roleta.html';
            }
        } else {
            alert('Credenciais inválidas!');
        }
    })
    .catch(error => console.error('Erro:', error));
}