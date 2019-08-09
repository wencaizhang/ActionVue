<template>
  <a-tabs>
    <a-tab-item title="tab 1" name="1">
      content of tab 1
    </a-tab-item>
    <a-tab-item title="tab 2" name="2" disabled>
      content of tab 2
    </a-tab-item>
    <a-tab-item title="tab 3" name="3" :disabled="false">
      content of tab 3
    </a-tab-item>
  </a-tabs>
</template>
