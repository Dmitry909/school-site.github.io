let shedule = [["", "Литература", "Биология", "Русский", "Русский", "Информатика", "Информатика"], ["Алгебра", "Алгебра", "Физика", "Английский язык", "Физика", "Информатика", "Информатика"], ["Информатика", "Информатика", "Физкультура", "Физкультура", "Английский язык", "История", "История"], ["", "Алгебра", "Алгебра", "Геометрия", "Геометрия", "Обществознание", "Английский язык"], ["Геометрия", "Геометрия", "Физика", "Физика", "Химия", "", ""], ["", "Литература", "Литература", "Обществознание", "ОБЖ", "", ""], ["", "", "", "", "", "", ""]];
let weekdays = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

function Build(table) {
    for (let i = table.getElementsByTagName('tr').length - 1; i >= 0; i--) {
        table.deleteRow(i);
    }
    let row = table.getElementsByTagName('thead')[0].insertRow(0);
    let first_column = document.createElement("th");
    first_column.innerHTML = "№";
    row.appendChild(first_column);
    let second_column = document.createElement("th");
    row.appendChild(second_column);
    for (let j = 1; j < 8; j++) {
        row = table.getElementsByTagName('tbody')[0].insertRow(j - 1);
        row.insertCell(0).innerHTML = j;
        row.insertCell(1).innerHTML = "";
    }
}

window.addEventListener('message', event =>
{
    let table = document.getElementById('table');
    Build(table);
    let rows = table.getElementsByTagName("tr");
    rows[0].getElementsByTagName('th')[1].innerHTML = weekdays[event.data];
    for (let j = 6; j >= 0; j--) {
        let field = rows[j + 1].getElementsByTagName('td')[1];
        field.innerHTML = shedule[event.data][j];
        if (j < 6 && shedule[event.data][j + 1] === shedule[event.data][j]) {
            let nextField = rows[j + 2].getElementsByTagName('td')[1];
            field.rowSpan = nextField.rowSpan + 1;
            nextField.remove();
        }
    }
});