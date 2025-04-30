import type { ColumnDef } from '@tanstack/vue-table';

export interface Services {
  id: string
  status: 'andamento' | 'finalizado' | 'produção'
  date: string
  type: string
  company: string
}

export type ServicesColumn = ColumnDef<Services>