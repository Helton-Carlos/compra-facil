<script setup lang="ts">
import { cards, data } from '~/utils/buy'
import { h, resolveComponent } from 'vue'
import type { BuyColumn } from '~/types/buy'

const UBadge = resolveComponent('UBadge');

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
]
</script>

<template>
  <div>
    <CFTitle
      title="Compras"
      icon="i-lucide-shopping-basket"
    />

    <div class="flex flex-wrap gap-4 mt-4">
      <div  
        v-for="item in cards"
        :key="item.title"
      >
        <CFCard 
          :title="item.title"
          :describe="item.describe"
          :icon= "item.icon"
          :path= "item.path"
        />
      </div>
    </div>

    <h4 class="my-8 font-bold">
      Lista de compras ativas
    </h4>

    <UTable 
      class="bg-black my-4 rounded-3xl"
      :data="data" 
      :columns="columns"  
    />
  </div>
</template>
