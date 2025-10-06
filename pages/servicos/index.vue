<script setup lang="ts">
import { cards } from '~/utils/services'
import { h, resolveComponent } from 'vue'
import type { Services, ServicesColumn } from '~/types/services'
import { useServerData } from '~/composables/useServerData';

const { data } = useServerData('/services');

const UBadge = resolveComponent('UBadge')

const columns: ServicesColumn[] = [
  {
    accessorKey: 'id',
    header: 'id',
    cell: ({ row }) => `${row.getValue('id')}`
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const color = {
        produção: 'success' as const,
        finalizado: 'error' as const,
        andamento: 'neutral' as const
      }[row.getValue('status') as string]

      return h(UBadge, { class: 'capitalize', variant: 'subtle', color }, () =>
        row.getValue('status')
      )
    }
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
    accessorKey: 'type',
    header: 'Tipo'
  },
  {
    accessorKey: 'company',
    header: 'Empresa'
  }
]
</script>


<template>
  <div>
    <CFTitle
      title="Serviços"
      icon="i-lucide-briefcase-business"
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
      Lista de serviços
    </h4>

    <UTable 
      class="bg-black my-4 rounded-3xl"
      :data="data as Services[]" 
      :columns="columns"  
    />
  </div>
</template>
