import { writable } from 'svelte/store';

export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

export const toasts = writable<Toast[]>([]);

export const showToast = (message: string, type: Toast['type'] = 'info') => {
  const id = Math.floor(Math.random() * 10000);
  
  // Add to store
  toasts.update((all) => [{ id, message, type }, ...all]);

  // Remove after 3 seconds
  setTimeout(() => {
    toasts.update((all) => all.filter((t) => t.id !== id));
  }, 3000);
};