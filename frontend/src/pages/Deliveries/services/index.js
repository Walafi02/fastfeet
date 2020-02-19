import api from '~/services/api';

const resouce = {
  get: {
    method: api.get,
    url: 'recipient',
  },
  show: {
    method: api.get,
    url: 'recipient/:id',
  },
};

export default resouce;
