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
