const entities = {
  deliveries: {
    urls: {
      get: '/delivery',
      show: '/delivery/:id',
    },
    columns: [
      { field: 'id', label: 'ID', type: 'text' },
      { field: 'recipient', label: 'Destinatário', type: 'text' },
      { field: 'deliveryman', label: 'Entregador', type: 'text' },
      { field: 'city', label: 'Cidade', type: 'text' },
      { field: 'state', label: 'Estado', type: 'text' },
      { field: 'status', label: 'Status', type: 'text' },
    ],
  },
  deliveryman: {
    urls: {
      get: '/deliveryman',
      show: '/deliveryman/:id',
    },
    columns: [{ field: 'id', label: 'ID', type: 'text' }],
  },
};

export default entities;
