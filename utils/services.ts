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

export const data = ref<Services[]>([])