export interface Payment {
  id: string
  date: string
  status: 'comprado' | 'cancelado' | 'aguardando'
  fornecedor: string
  amount: number
}