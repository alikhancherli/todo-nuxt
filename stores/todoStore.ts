import { defineStore } from 'pinia';
import { AccessToken, Todo, TodoItem } from '@/types/types';
import ApiFetch from '../services/fetchApi';
import Swal from 'sweetalert2';
import { AxiosResponse } from 'axios';


export const useTodoStore = defineStore('todos', {
    state: () => ({
        todos: [] as Todo[],
        loggedInUser: false
    }),
    actions: {
        async getTodos() {
            const { apiBaseUrl } = useRuntimeConfig().public;
            const { isSignedIn, user } = useAuth();

            if (isSignedIn.value) {
                const apiFetch = new ApiFetch<Todo[]>(`todo/all?userId=${user.value.userClaims.id}`, {
                    baseUrl: apiBaseUrl,
                    headers: {
                        'Authorization': 'bearer ' + user.value.accessToken
                    }
                });

                await apiFetch.send().then((data) => {
                    this.todos = data.data || [];
                }).catch(err => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        html: `<p>Something went wrong!</p> <br/> <strong>We got [${err.message}] issue.</strong>`,
                        footer: '<a href="">Report the issue?</a>'
                    })
                });
            } else {

                Swal.fire({
                    icon: 'error',
                    title: 'Access Denied !',
                    confirmButtonText: 'Login'
                }).then((result) => {
                    navigateTo('/login', { replace: true })
                })
            }

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

            await apiFetch.post().then(async (data) => {
                localStorage.setItem(userAccessTokenKey, JSON.stringify(data.data));
                await navigateTo('/')
            }).catch(err => {
                const { response } = err;
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    html: `<p>Something went wrong!</p> <br/> <strong class="text-gray-500">We got [${response.data}] issue.</strong>`,
                    footer: '<a href="#">Report the issue?</a>'
                })
            });
        },
        async addTodo(items: TodoItem) {
            const { userAccessTokenKey, apiBaseUrl } = useRuntimeConfig().public;
            const apiFetch = new ApiFetch<any>('/ToDo/AddTodoList', {
                baseUrl: apiBaseUrl,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(items)
            });

            await apiFetch.post().then((data)=>{
                console.log(data)
            })
        }
    }
})