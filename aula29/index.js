const date = new Date();
const weekDay = date.getDay();

function getWeekDayText (weekDay) {
    let weekDayText;
    switch (weekDay) {
        case 0:
            weekDayText = "Domingo";
            break;
        case 1:
            weekDayText = "Segunda";
            break;
        case 2:
            weekDayText = "Terça";
            break;
        case 3:
            weekDayText = "Quarta";
            break;
        case 4:
            weekDayText = "Quinta";
            break;
        case 5:
            weekDayText = "Sexta";
            break;    case 6:
            weekDayText = "Sábado";
            break;
        default:
            weekDayText = "Inválido";
    };

    return weekDayText
};

let weekDayText = getWeekDayText(weekDay);

console.log(weekDay, weekDayText);