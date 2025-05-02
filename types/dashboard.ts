import type { ColumnDef } from '@tanstack/vue-table';

export interface Dashboard {
  id: string
  date: string
  status: 'comprado' | 'cancelado' | 'aguardando'
  fornecedor: string
  amount: number
}

export type DashboardColumn = ColumnDef<Dashboard>