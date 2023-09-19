<template>
  <div>
    <PageHeader 
      path="../src/assets/images/madchemistry.png" 
      title="Atomic Design"
      >
    </PageHeader>
    
    <PageContent>
      <AtomicMark />
    </PageContent>
  </div>
</template>

<script setup lang="ts">
import AtomicMark from '@mark/AtomicMark.md'
</script>
