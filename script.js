document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    
    // Aquí puedes añadir la lógica para enviar los datos a un servidor o manejarlos como necesites
    console.log('Cita agendada para:', name, email, date, time);
    
    alert('Cita agendada con éxito!');
});
