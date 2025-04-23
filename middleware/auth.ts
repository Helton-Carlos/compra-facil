export default defineNuxtRouteMiddleware((to,) => {
  const { user } = useUserStore();

  if (!user) {
    return navigateTo('/login')
  }
})