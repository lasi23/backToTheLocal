

// // -------------------mois et année a afficher-----------


// let currentMonth = new Date().getMonth();
// let currentYear = new Date().getFullYear();

// let events = {}; // objets pour stocker les événements

// function generateCalendar(year, month) {
//     const calendarElement = document.querySelector("#calendar");
//     const monthYearElement = document.querySelector("#month-year");

//     const date = new Date(year, month, 1);    
//     const daysInMonth = new Date(year, month + 1, 0).getDate();   

//     const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//     const monthNames = ["January","February","March","April","May","June",
//                         "July","August","September","October","November","December"];
    
//     // Afficher le mois et l'année
//     monthYearElement.textContent = `${monthNames[month]} ${year}`;

//     // Commencer le tableau
//     let html = '<tr>';
//     daysOfWeek.forEach(day => html += `<th>${day}</th>`);
//     html += '</tr><tr>';

//     // Ajouter les cases vides avant le 1er jour
//     for(let i = 0; i < date.getDay(); i++) {
//         html += '<td></td>';
//     }

//     // Ajouter les jours du mois
//     for(let day = 1; day <= daysInMonth; day++) {
//         const key = `${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
//         html += `<td class="day-cell" data-date="${key}">${day}`;
//         if(events[key]) {
//             html += `<br><strong>${events[key]}</strong>`;
//         }
//         html += '</td>';

//         if((day + date.getDay()) % 7 === 0) {
//             html += '</tr><tr>';
//         }
//     }

//     html += '</tr>';
//     calendarElement.innerHTML = html;

//     addClickListeners(); // rendre les jours cliquables
// }


// // Afficher le calendrier du mois courant
// generateCalendar(currentYear, currentMonth);
