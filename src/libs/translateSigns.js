export default (name) => {
    let sign = name.toLowerCase();

    switch(sign) {
        case 'aries':
            return 'Овен';
            break;
        case 'taurus':
            return 'Телец';
            break;
        case 'gemini':
            return 'Близнецы';
            break;
        case 'cancer':
            return 'Рак';
            break;
        case 'leo':
            return 'Лев';
            break;
        case 'virgo':
            return 'Дева';
            break;
        case 'libra':
            return 'Весы';
            break;
        case 'scorpio':
            return 'Скорпион';
            break;
        case 'sagittarius':
            return 'Стрелец';
            break;
        case 'capricorn':
            return 'Козерог';
            break;
        case 'aquarius':
            return 'Водолей';
            break;
        case 'pisces':
            return 'Рыбы';
            break;
        default:
            return 'Неизвестный';
            break;
    }
}