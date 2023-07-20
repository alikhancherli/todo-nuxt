export function useAuth() {
  const { userAccessTokenKey } = useRuntimeConfig().public;

  const user = ref(null);

  const isSignedIn = computed(() => {
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

  function signOut(){
    if (process.client) {
      localStorage.removeItem(userAccessTokenKey);
      const router = useRouter();
      router.push('/exit')
    }
  }

  return {
    user,
    isSignedIn,
    signOut
  };

}