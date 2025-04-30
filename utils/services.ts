import type { Services } from '~/types/services';

export const cards = [
  {
    title: 'Prestação de serviços',
    describe: 'Cadastre aqui o serviços',
    path: 'requisicao-compra',
    icon: 'i-lucide-building-2'
  },
  {
    title: 'Serviços favoritos',
    describe: 'Serviços mais ultilizados',
    path: 'acompanhar-pedidos-compra',
    icon: 'i-lucide-book-heart'
  },
];

export const data = ref<Services[]>([
  {
    id: '4600',
    status: 'andamento',
    date: '2024-03-11T15:30:00',
    type: 'montagem',
    company: 'Artesanato'
  },
  {
    id: '4599',
    status: 'finalizado',
    date: '2024-03-11T15:30:00',
    type: 'montagem',
    company: 'Artesanato'
  },
  {
    id: '4598',
    status: 'produção',
    date: '2024-03-11T15:30:00',
    type: 'montagem',
    company: 'Artesanato'
  },
  {
    id: '4597',
    status: 'andamento',
    date: '2024-03-11T15:30:00',
    type: 'montagem',
    company: 'Artesanato'
  },
  {
    id: '4596',
    status: 'andamento',
    date: '2024-03-11T15:30:00',
    type: 'montagem',
    company: 'Artesanato'
  }
])