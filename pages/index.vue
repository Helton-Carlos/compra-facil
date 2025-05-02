<script setup lang="ts">
import { cards, data } from '~/utils/dashboard';
import { h, resolveComponent } from 'vue';
import type { DashboardColumn } from '~/types/dashboard';

const UBadge = resolveComponent('UBadge');

const columns: DashboardColumn[] = [
  {
    accessorKey: 'id',
    header: 'id',
    cell: ({ row }) => `${row.getValue('id')}`
  },
  {
    accessorKey: 'date',
    header: 'Data',
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
        comprado: 'success' as const,
        cancelado: 'error' as const,
        aguardando: 'neutral' as const
      }[row.getValue('status') as string]

      return h(UBadge, { class: 'capitalize', variant: 'subtle', color }, () =>
        row.getValue('status')
      )
    }
  },
  {
    accessorKey: 'fornecedor',
    header: 'Fornecedor'
  },
  {
    accessorKey: 'amount',
    header: () => h('div', { class: 'text-right' }, 'Amount'),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('amount'))

      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR'
      }).format(amount)

      return h('div', { class: 'text-right font-medium' }, formatted)
    }
  }
];

definePageMeta({
  middleware: ['auth'],
});
</script>

<template>
  <div>
    <CFTitle
      title="Dashboard"
      icon="i-lucide-album"
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
      Compras em negociação
    </h4>

    <UTable 
      class="bg-black my-4 rounded-3xl"
      :data="data" 
      :columns="columns"  
    />
  </div>
</template>
