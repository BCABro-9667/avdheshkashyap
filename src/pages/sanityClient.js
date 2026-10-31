// sanityClient.js
import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '6t5zqmap',
  dataset: 'production',
  apiVersion: '2025-05-01',
  useCdn: false,
  token: "skvyModWKtz4irgXxvL2LgpLzX07Dg0zK7FC3PPDH1YneICZ3epIyvUgujkYDJLpdcGeoPxChkUCsKJu3QmPxdQiahr4XGZn5avgMJIUyWtPEIPOrctGqz2LnZTqfVednNzUGyAANTKTpOx4WO1XIHRDCZk2P4Fx9KS2vuoeqIjlE2KDGOMB" // use your token securely from .env
})

export default client;