<script lang="ts">
  import { toasts } from './toast';
  import { flip } from 'svelte/animate';
  import { fade } from 'svelte/transition';
</script>

<div class="toast-container">
  {#each $toasts as toast(toast.id)}
    <div 
      animate:flip 
      transition:fade 
      class="toast {toast.type}"
    >
      {toast.message}
    </div>
  {/each}
</div>

<style>
  .toast-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 9999;
  }

  .toast {
    padding: 12px 20px;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }

  .success { background: #22c55e; }
  .error { background: #ef4444; }
  .info { background: #3b82f6; }
</style>