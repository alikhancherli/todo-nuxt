import { defineStore } from 'pinia';
import { AccessToken, Todo } from '@/types/types';
import ApiFetch from '../services/fetchApi';

export const useTodoStore = defineStore('todos', {
    state: () => ({
        todos: [] as Todo[]
    }),
    actions: {
        async getTodos() {
            const apiFetch = new ApiFetch<Todo[]>('/all?userId=2', {
                baseUrl: 'https://localhost:7112/',
                headers: {}
            });

            const { data, message } = await apiFetch.send();
            this.todos = data || [];
        },
        async postLogin(username: string, password: string) {
            const {userAccessTokenKey,apiBaseUrl} = useRuntimeConfig().public;
            const form = new FormData();
            form.append('Username', username);
            form.append('Password', password);

            const apiFetch = new ApiFetch<AccessToken>('/Account/Login', {
                baseUrl: apiBaseUrl,
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                body: form
            });

            const {data} = await apiFetch.post();
            localStorage.setItem(userAccessTokenKey,JSON.stringify(data));
            const router = useRouter();
            router.push('/')
        }
    }
})