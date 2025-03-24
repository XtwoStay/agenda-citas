document.addEventListener('DOMContentLoaded', function() {
    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const calendar = document.getElementById('calendar');

    days.forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'day';
        dayDiv.innerHTML = `<h3>${day}</h3>`;

        for (let i = 1; i <= 3; i++) {
            const turnDiv = document.createElement('div');
            turnDiv.className = 'turn';
            turnDiv.innerText = `Turno ${i}`;
            turnDiv.addEventListener('click', function() {
                if (!turnDiv.classList.contains('booked')) {
                    const name = prompt('Ingrese su nombre para agendar este turno:');
                    if (name) {
                        turnDiv.innerText = `${name} - Turno ${i}`;
                        turnDiv.classList.add('booked');
                    }
                } else {
                    alert('Este turno ya está agendado.');
                }
            });
            dayDiv.appendChild(turnDiv);
        }

        calendar.appendChild(dayDiv);
    });
});
