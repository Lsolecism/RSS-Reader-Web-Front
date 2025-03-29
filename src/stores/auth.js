// stores/auth.ts
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: sessionStorage.getItem('token') || '' // 从sessionStorage初始化
    }),
    actions: {
        setToken(token: string) {
            this.token = token;
            sessionStorage.setItem('token', token); // 同步到sessionStorage
        },
        clearToken() {
            this.token = '';
            sessionStorage.removeItem('token');
        }
    }
});