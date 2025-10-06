import type { Dashboard } from '~/types/dashboard';
import { ref } from 'vue';

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

export const data = ref<Dashboard[]>([])