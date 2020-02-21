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
    columns: [
      { field: 'id', label: 'ID', type: 'text' },
      { field: 'avatar.url', label: 'Foto', type: 'avatar' },
      { field: 'name', label: 'Nome', type: 'text' },
      { field: 'email', label: 'Email', type: 'fulltext' },
    ],
  },
  recipient: {
    urls: {
      get: '/recipient',
      show: '/recipient/:id',
    },
    columns: [
      { field: 'id', label: 'ID', type: 'text' },
      { field: 'name', label: 'Nome', type: 'text' },
      { field: 'address', label: 'Endereço', type: 'fulltext' },
    ],
  },
  problems: {
    urls: {
      get: '/delivery/problems',
    },
    columns: [
      { field: 'id', label: 'ID', type: 'text' },
      { field: 'description', label: 'Descrição', type: 'fulltext' },
    ],
  },
};

export default entities;
