export default defineNuxtRouteMiddleware((to, _from) => {
  const { isAuthenticated } = useUserStore();

  if (to.name === 'login' || to.path === '/login') {
    return;
  }

  if (!isAuthenticated) {
    return navigateTo('/login');
  }
});