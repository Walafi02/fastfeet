import {format, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';

export const dateFormated = date =>
  date ? format(parseISO(date), 'dd/MM/yyyy', {locale: pt}) : '--/--/----';

export const statusFormated = status => {
  switch (status) {
    case 'canceled':
      return 'Cancelado';
    case 'progress':
      return 'Em andamento';
    case 'done':
      return 'Entregue';
    default:
      return 'Pendente';
  }
};

export const getColor = color => {
  switch (color) {
    case 'A':
    case 'B':
    case 'C':
    case 'D':
      return '#F4EFFC';
    case 'F':
    case 'G':
    case 'H':
    case 'I':
      return '#FCF4EE';
    case 'J':
    case 'L':
    case 'M':
    case 'N':
      return '#EBFBFA';
    case 'O':
    case 'P':
    case 'Q':
    case 'S':
      return '#FFEEF1';
    case 'W':
    case 'U':
    case 'V':
      return '#F4F9EF';
    case 'X':
    case 'Z':
    case 'Y':
      return '#F4F9EF';
    default:
      return '#83CEC9';
  }
};
