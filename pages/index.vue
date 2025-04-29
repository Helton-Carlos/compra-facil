<script setup lang="ts">
import { cards, data } from '~/utils/dashboard';
import type { TableColumn } from '@nuxt/ui';
import type { Payment } from '~/types/dashboard';
import { h, resolveComponent } from 'vue';

const UBadge = resolveComponent('UBadge');

const columns: TableColumn<Payment>[] = [
  {
    accessorKey: 'id',
    header: '#',
    cell: ({ row }) => `#${row.getValue('id')}`
  },
  {
    accessorKey: 'date',
    header: 'Date',
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
        paid: 'success' as const,
        failed: 'error' as const,
        refunded: 'neutral' as const
      }[row.getValue('status') as string]

      return h(UBadge, { class: 'capitalize', variant: 'subtle', color }, () =>
        row.getValue('status')
      )
    }
  },
  {
    accessorKey: 'email',
    header: 'Email'
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

    <UTable 
      class="bg-black my-4 rounded-3xl"
      :data="data" 
      :columns="columns"  
    />
  </div>
</template>
