import type { ColumnDef } from '@tanstack/vue-table';

export interface Companies {
  id: string
  status: 'ativa' | 'removido' | 'inativa'
  date: string
  type: string
  company: string
}

export type CompaniesColumn = ColumnDef<Companies>