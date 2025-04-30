import type { Product } from '~/types/product';

export const cards = [
  {
    title: 'Cadastrar produto',
    describe: 'Cadastre aqui seus produtos',
    path: 'requisicao-compra',
    icon: 'i-lucide-building-2'
  },
  {
    title: 'Histórico de produtos',
    describe: 'Veja ultimos histórico',
    path: 'historico-requisicao',
    icon: 'i-lucide-backpack'
  },
];

export const data = ref<Product[]>([
  {
    id: '1',
    name: 'capacete',
    date: '2024-03-11T15:30:00',
    status: 'estoque',
    type: 'proteção'
  },
  {
    id: '2',
    name: 'lampada',
    date: '2024-03-11T15:30:00',
    status: 'falta',
    type: 'casa'
  },
  {
    id: '3',
    name: 'ventilador',
    date: '2024-03-11T15:30:00',
    status: 'baixa',
    type: 'casa'
  },
  {
    id: '4',
    name: 'ventilador',
    date: '2024-03-11T15:30:00',
    status: 'estoque',
    type: 'casa'
  },
])