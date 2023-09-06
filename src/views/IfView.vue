<template>
  <div>
    <!-- TODO zmień tapete -->
    <PageHeader 
      path="../src/assets/images/knighteye.png" 
      title="v-if, v-else">
    </PageHeader>
    <PageContent>
      <IfMark />
    </PageContent>
  </div>
</template>

<script setup lang="ts">
import IfMark from '@mark/IfMark.md'
</script>