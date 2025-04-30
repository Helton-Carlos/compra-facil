<script setup lang="ts">
import { cards, data } from '~/utils/product'
import { h, resolveComponent } from 'vue'
import type { ProductColumn } from '~/types/product'

const UBadge = resolveComponent('UBadge')

const columns: ProductColumn[] = [
  {
    accessorKey: 'id',
    header: 'id',
    cell: ({ row }) => `${row.getValue('id')}`
  },
  {
    accessorKey: 'name',
    header: 'Nome'
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
        estoque: 'success' as const,
        falta: 'error' as const,
        baixa: 'neutral' as const
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
]
</script>

<template>
  <div>
    <CFTitle
      title="Estoque"
      icon="i-lucide-arrow-right-left"
    />

    
    <div class="flex flex-wrap gap-4 mt-4">
      <div  
        v-for="item in cards"
        :key="item.title"
      >
        <Card 
          :title="item.title"
          :describe="item.describe"
          :icon= "item.icon"
          :path= "item.path"
        />
      </div>
    </div>

    
    <h4 class="my-8 font-bold">
      Lista de empresas cadastradas
    </h4>

    <UTable 
      class="bg-black my-4 rounded-3xl"
      :data="data" 
      :columns="columns"  
    />
  </div>
</template>
