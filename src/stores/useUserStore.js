import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        avatar: '',   // 头像URL
        userId: '',   // 用户ID
        username: '',  // 用户名
        rss_source:''// rss源
    }),
    actions: {
        setUserInfo(info: { avatar: string; userId: string; username: string }) {
            this.avatar = info.avatar;
            this.userId = info.userId;
            this.username = info.username;
        },
        setRssSource(rss_source: string) {
            this.rss_source = rss_source;
        }
    }
});