import type { Companies } from '~/types/companies';

export const cards = [
  {
    title: 'Cadastrar empresas',
    describe: 'Cadastre aqui suas parcerias',
    path: 'cadastrar-empresas',
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

export const data = ref<Companies[]>([])