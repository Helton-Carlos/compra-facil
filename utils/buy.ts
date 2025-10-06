import type { Buy } from '~/types/buy';

export const cards = [
  {
    title: 'Cadastrar compras',
    describe: 'Cadastre aqui suas compras',
    path: 'requisicao-compra',
    icon: 'i-lucide-building-2'
  },
  {
    title: 'Compras favoritas',
    describe: 'Produtos mais comprados',
    path: 'acompanhar-pedidos-compra',
    icon: 'i-lucide-book-heart'
  },
  {
    title: 'Histórico de compras',
    describe: 'Veja ultimos histórico',
    path: 'historico-requisicao',
    icon: 'i-lucide-backpack'
  },
];

export const data = ref<Buy[]>([])