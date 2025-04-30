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

export const data = ref<Buy[]>([
  {
    id: '4600',
    status: 'aguardando',
    date: '2024-03-11T15:30:00',
    company: 'Casa da roupa',
    type: 'vestuario', 
    need: 'baixa' 
  },
  {
    id: '4599',
    status: 'finalizado',
    date: '2024-03-11T15:30:00',
    company: 'Casa da roupa',
    type: 'vestuario', 
    need: 'média' 
  },
  {
    id: '4598',
    status: 'negociado',
    date: '2024-03-11T15:30:00',
    company: 'Casa da roupa',
    type: 'vestuario', 
    need: 'alta' 
  },
  {
    id: '4597',
    status: 'negociado',
    date: '2024-03-11T15:30:00',
    company: 'Casa da roupa',
    type: 'vestuario', 
    need: 'alta' 
  },
  {
    id: '4596',
    status: 'aguardando',
    date: '2024-03-11T15:30:00',
    company: 'Casa da roupa',
    type: 'vestuario', 
    need: 'média' 
  }
])