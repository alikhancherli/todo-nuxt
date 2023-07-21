import ApiFetch from "@/services/fetchApi";
import { RegisterModel } from "@/types/types";
import { useTodoStore } from "@/stores/todoStore";
import Swal from 'sweetalert2';

export function useAuth() {
  const store = useTodoStore();
  const { userAccessTokenKey } = useRuntimeConfig().public;

  const user = ref(null);

  const isSignedIn = computed(() => {
    store.loggedInUser = true;
    return !!user.value;
  });

  function checkAuth() {
    if (process.client) {
      const storedToken = localStorage.getItem(userAccessTokenKey);
      if (storedToken) {
        user.value = JSON.parse(storedToken);
      }
    }
  }

  checkAuth();

  function signOut() {
    if (process.client) {
      localStorage.removeItem(userAccessTokenKey);
      store.loggedInUser = false;
      const router = useRouter();
      router.push('/exit')
    }
  }

  async function signIn(userName: string, password: string, firstName: string, lastName: string, email?: string | '') {
    const { apiBaseUrl } = useRuntimeConfig().public;

    const form = new FormData();
    form.append('FirstName', firstName);
    form.append('LastName', lastName);
    form.append('Email', email);
    form.append('Password', password);
    form.append('Username', userName);


    const apiFetch = new ApiFetch<RegisterModel>('/Account/Register', {
      baseUrl: apiBaseUrl,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: form
    });

    await apiFetch.post().then((data) => {
      console.log(data)
      Swal.fire({
        icon: data.isSuccess ? 'success' : 'warning',
        title: 'Registration completed! Now you can sign in.',
        footer: '<a href="#">Report the issue?</a>'
      }).then((res) => {
        navigateTo('/login')
      })
    }).catch((err) => {
      console.log(err)
      // Swal.fire({
      //   icon: 'error',
      //   title: 'Oops...',
      //   html: `<p>Something went wrong!</p> <br/> <strong class="text-gray-500">We got [${response.data}] issue.</strong>`,
      //   footer: '<a href="#">Report the issue?</a>'
      // })
    })
  }

  return {
    user,
    isSignedIn,
    signOut,
    signIn
  };

}