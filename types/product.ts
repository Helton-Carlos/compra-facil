import type { ColumnDef } from '@tanstack/vue-table';

export interface Product {
  id: string
  name: string
  date: string
  status: 'estoque' | 'falta' | 'baixa'
  type: string 
}

export type ProductColumn = ColumnDef<Product>