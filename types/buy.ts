import type { ColumnDef } from '@tanstack/vue-table';

export interface Buy {
  id: string
  product: string
  amount: number
  date: string
  status: 'aguardando' | 'finalizado' | 'negociado'
  type: string 
  company: string
  need: 'baixa' | 'média' | 'alta'
}

export type BuyColumn = ColumnDef<Buy>