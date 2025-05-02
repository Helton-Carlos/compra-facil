<script setup lang="ts">
import { data } from '~/utils/buy'
import { h, resolveComponent } from 'vue'
import type { BuyColumn } from '~/types/buy'

const UBadge = resolveComponent('UBadge');
const result = ref<BuyColumn[]>([])

const columns: BuyColumn[] = [
  {
    accessorKey: 'id',
    header: 'id',
    cell: ({ row }) => `${row.getValue('id')}`
  },
  {
    accessorKey: 'product',
    header: 'Produto'
  },
  {
    accessorKey: 'amount',
    header: 'Quantidade(s)'
  },
  {
    accessorKey: 'date',
    header: 'Cadastrado',
    cell: ({ row }) => {
      return new Date(row.getValue('date')).toLocaleString('en-US', {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      })
    }
  }, 
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const color = {
        negociado: 'success' as const,
        finalizado: 'error' as const,
        aguardando: 'neutral' as const
      }[row.getValue('status') as string]

      return h(UBadge, { class: 'capitalize', variant: 'subtle', color }, () =>
        row.getValue('status')
      )
    }
  },
  {
    accessorKey: 'type',
    header: 'Tipo'
  },
  {
    accessorKey: 'company',
    header: 'Empresa'
  },
  {
    accessorKey: 'need',
    header: 'Necessidade',
    cell: ({ row }) => {
      const color = {
        baixa: 'success' as const,
        alta: 'error' as const,
        média: 'neutral' as const
      }[row.getValue('need') as string]

      return h(UBadge, { class: 'capitalize', variant: 'subtle', color }, () =>
        row.getValue('need')
      )
    }
  },
];

function search(e: any) {
  const name = e.target.value;

  const value = data.value.filter(({product}) => product === name);
 
  result.value = value;
}
</script>

<template>
  <div>
    <CFTitle
      title="Requisição de compra"
      icon="i-lucide-shopping-basket"
    />

    <div class="my-4">
      <UInput 
        class="w-full"
        icon="i-lucide-search" 
        size="md" 
        variant="outline" 
        placeholder="Busque sua compra..." 
        @change="search"
      />

      <UTable 
        class="bg-black my-4 rounded-3xl"
        :data="result" 
        :columns="columns"  
      />
    </div>
  </div>
</template>
