export const useServerData = (endpoint: string) => {
  const config = useRuntimeConfig();
  const apiBaseUrl = config.public.apiSecretUrl; 
  const fullUrl = `${apiBaseUrl}${endpoint}`;

  const { data, error } = useAsyncData(fullUrl, () => {
    
  return $fetch(fullUrl); 
  }, {
    server: true 
  });

  return { data, error };
};