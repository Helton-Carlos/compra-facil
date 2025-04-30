import type { Companies } from '~/types/companies';

export const cards = [
  {
    title: 'Cadastrar empresas',
    describe: 'Cadastre aqui suas parcerias',
    path: 'requisicao-compra',
    icon: 'i-lucide-building-2'
  },
  {
    title: 'Empresas favoritas',
    describe: 'Veja os parceiros que estão em alta',
    path: 'acompanhar-pedidos-compra',
    icon: 'i-lucide-book-heart'
  },
  {
    title: 'Empresas Inativas',
    describe: 'Veja ultimos histórico',
    path: 'historico-requisicao',
    icon: 'i-lucide-backpack'
  },
];

export const data = ref<Companies[]>([
  {
    id: '4600',
    status: 'ativa',
    date: '2024-03-11T15:30:00',
    type: 'vestuario',
    company: 'Casa da roupa'
  },
  {
    id: '4599',
    status: 'removido',
    date: '2024-03-11T15:30:00',
    type: 'vestuario',
    company: 'Casa da roupa'
  },
  {
    id: '4598',
    status: 'inativa',
    date: '2024-03-11T15:30:00',
    type: 'vestuario',
    company: 'Casa da roupa'
  },
  {
    id: '4597',
    status: 'inativa',
    date: '2024-03-11T15:30:00',
    type: 'vestuario',
    company: 'Casa da roupa'
  },
  {
    id: '4596',
    status: 'ativa',
    date: '2024-03-11T15:30:00',
    type: 'vestuario',
    company: 'Casa da roupa'
  }
])