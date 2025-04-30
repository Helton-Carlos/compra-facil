import type { Dashboard } from '~/types/dashboard';

export const cards = [
  {
    title: 'Requisição de compra',
    describe: 'Requerimento, solicitação ou pedido',
    path: 'requisicao-compra',
    icon: 'i-lucide-shopping-cart'
  },
  {
    title: 'Acompanhar pedidos de compra',
    describe: 'Localize e veja os status',
    path: 'acompanhar-pedidos-compra',
    icon: 'i-lucide-file-chart-column-increasing'
  },
  {
    title: 'Histórico de requisições',
    describe: 'Veja ultimos histórico',
    path: 'historico-requisicao',
    icon: 'i-lucide-backpack'
  },
];

export const data = ref<Dashboard[]>([
  {
    id: '4600',
    date: '2024-03-11T15:30:00',
    status: 'comprado',
    fornecedor: 'james.anderson@example.com',
    amount: 594
  },
  {
    id: '4599',
    date: '2024-03-11T10:10:00',
    status: 'cancelado',
    fornecedor: 'mia.white@example.com',
    amount: 276
  },
  {
    id: '4598',
    date: '2024-03-11T08:50:00',
    status: 'aguardando',
    fornecedor: 'william.brown@example.com',
    amount: 315
  },
  {
    id: '4597',
    date: '2024-03-10T19:45:00',
    status: 'comprado',
    fornecedor: 'emma.davis@example.com',
    amount: 529
  },
  {
    id: '4596',
    date: '2024-03-10T15:55:00',
    status: 'comprado',
    fornecedor: 'ethan.harris@example.com',
    amount: 639
  }
])