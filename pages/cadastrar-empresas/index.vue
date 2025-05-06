<script setup lang="ts">

</script>

<template>
  <div>
    <CFTitle
      title="Cadastrar empresas"
      icon="i-lucide-briefcase-business"
    />

    <div class="bg-black mt-8 p-8">
      <h4 class="font-bold mb-4">
        Digite os campos para cadastrar:
      </h4>

      <div class="grid grid-cols-3 gap-4">
        <UFormField label="Nome da empresa" required>
          <UInput placeholder="ex: Lojão Mundial importados" />
        </UFormField>

        <UFormField label="Email" required>
          <UInput placeholder="ex: lojaomundial@gmail.com" />
        </UFormField>

        <UFormField label="CNPJ" required>
          <UInput placeholder="12.345.678/0001-00" />
        </UFormField>
      </div>

      <div class="grid grid-cols-3 gap-4 my-4">
        <UFormField label="Nome da empresa" required>
          <UInput placeholder="ex: Lojão mundão importados" />
        </UFormField>

        <UFormField label="Email" required>
          <UInput placeholder="ex: lojaomundao@gmail.com" />
        </UFormField>

        <UFormField label="CNPJ" required>
          <UInput placeholder="12.345.678/0001-00" />
        </UFormField>
      </div>
    </div>
  </div>
</template>
