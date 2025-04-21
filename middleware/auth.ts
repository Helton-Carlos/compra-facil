export default defineNuxtRouteMiddleware((to, ) => {
  if (to.path === '/') { 
    return navigateTo('/login')
  }
  if (to.path !== '/') {
    return navigateTo('/')
  }
})