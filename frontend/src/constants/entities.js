const entities = {
  deliveries: {
    urls: {
      get: '/delivery',
      show: '/delivery/:id',
    },
    columns: [
      { field: 'id', label: 'ID', type: 'text' },
      { field: 'product', label: 'Produto', type: 'text' },
      { field: 'recipient.name', label: 'Destinatário', type: 'text' },
      { field: 'deliveryman', label: 'Entregador', type: 'driver' },
      { field: 'recipient.city', label: 'Cidade', type: 'text' },
      { field: 'recipient.state', label: 'Estado', type: 'text' },
      { field: 'status', label: 'Status', type: 'status' },
    ],
  },
  deliveryman: {
    urls: {
      get: '/deliveryman',
      show: '/deliveryman/:id',
    },
    columns: [{ field: 'id', label: 'ID', type: 'text' }],
  },
  recipient: {
    urls: {
      get: '/recipient',
      show: '/recipient/:id',
    },
    columns: [{ field: 'id', label: 'ID', type: 'text' }],
  },
};

export default entities;
