import "dotenv/config"

import {v2 as cloudinary} from "cloudinary"

import {logTags} from "~/src/log"

cloudinary.config({
    cloud_name: "bradgarropy",
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
})

// const response = await cloudinary.api.update(
//     "cloudinary-existing-image-tag-demo/karsten-winegeart-4sVmgh6ufk8-unsplash",
//     {
//         categorization: "google_tagging",
//         auto_tagging: 0.9,
//     },
// )

const images = [
    "karsten-winegeart-4sVmgh6ufk8-unsplash",
    "lily-miller-Nq0wlaIL1yY-unsplash",
    "nikita-kachanovsky-FJFPuE1MAOM-unsplash",
    "isaac-wendland-7DCZgKyp8vw-unsplash",
    "anastase-maragos-7kEpUPB8vNk-unsplash",
    "procreator-ux-design-studio-VzJjPuk53sk-unsplash",
    "andi-bocsardi-1swTrFbBZvk-unsplash",
    "guillaume-coupy-Zdkn765eMZs-unsplash",
]

const promises = images.map(image =>
    cloudinary.api.update(`cloudinary-existing-image-tag-demo/${image}`, {
        categorization: "google_tagging",
        auto_tagging: 0.9,
    }),
)

const results = await Promise.all(promises)
results.forEach(result => logTags(result))
