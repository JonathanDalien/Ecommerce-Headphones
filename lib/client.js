import imageUrlBuilder from '@sanity/image-url'
const sanityClient = require('@sanity/client')

export const client = sanityClient({
    projectId: "dby3f8lt",
    dataset: "production",
    apiVersion: "2022-10-24",
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client)

export const urlFor = source => builder.image(source)