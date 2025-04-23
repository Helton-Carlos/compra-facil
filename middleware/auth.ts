export default defineNuxtRouteMiddleware(() => {
  const { user } = useUserStore()

  if (!user || process.env.ENVIRONMENT === 'PROD' ? false : true) {
    return navigateTo('/login')
  }
})