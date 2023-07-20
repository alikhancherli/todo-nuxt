import { defineStore } from 'pinia';
import { AccessToken, Todo } from '@/types/types';
import ApiFetch from '../services/fetchApi';
import Swal from 'sweetalert2';



export const useTodoStore = defineStore('todos', {
    state: () => ({
        todos: [] as Todo[]
    }),
    actions: {
        async getTodos() {
            const { apiBaseUrl } = useRuntimeConfig().public;
            const apiFetch = new ApiFetch<Todo[]>('/all?userId=2', {
                baseUrl: apiBaseUrl,
                headers: {}
            });

            await apiFetch.send().then((data) => {
                console.log(data)
                this.todos = data.data || [];
            }).catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    html: `<p>Something went wrong!</p> <br/> <strong>We got [${err.message}] issue.</strong>`,
                    footer: '<a href="">Report the issue?</a>'
                })
            });

        },
        async postLogin(username: string, password: string) {
            const { userAccessTokenKey, apiBaseUrl } = useRuntimeConfig().public;
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

            await apiFetch.post().then(data => {
                localStorage.setItem(userAccessTokenKey, JSON.stringify(data.data));
                const router = useRouter();
                router.push('/')
            }).catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    html: `<p>Something went wrong!</p> <br/> <strong class="text-gray-500">We got [${err.message}] issue.</strong>`,
                    footer: '<a href="#">Report the issue?</a>'
                })
            });
        }
    }
})