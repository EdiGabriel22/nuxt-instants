import { CheerioAPI } from "cheerio"
import { ReadAllResponse } from "./types"
import { BASE_URL, CATEGORIES_INSTANTS_READ_ALL_URL, READ_ALL_URL, RECENT_URL, SEARCH_URL } from "~/server/config/url"
import slugify from "slugify"

export function NewController(cheerio: CheerioAPI) {
    async function readAll() {
        const html = await $fetch<string>(READ_ALL_URL)
        const $ = cheerio.load(html)
        
        const response: ReadAllResponse[] = []

        $(".instant").each((_index, element) => {
            const title = $(element).children(".instant-link").text()
            const audio = $(element).children(".small-button").attr("onclick")
            
            if (!audio) {
                return
            }
          
            const [, audioUrl] = audio.split("'")
          
            response.push({
                id: slugify(title),
                title,
                audioUrl: `${BASE_URL}${audioUrl}`,
            })
        })

        return response
    }

    async function search(q: string) {
        const html = await $fetch<string>(`${SEARCH_URL}?name=${q}`)
        const $ = cheerio.load(html)
    
        const response: ReadAllResponse[] = []
    
        $(".instant").each((_index, element) => {
            const title = $(element).children(".instant-link").text()
            const audio = $(element).children(".small-button").attr("onclick")
            
            if (!audio) {
                return
            }
          
            const [, audioUrl] = audio.split("'")
          
            response.push({
                id: slugify(title),
                title,
                audioUrl: `${BASE_URL}${audioUrl}`,
            })
        })
    
        return response
    }

    async function recent() {
        const html = await $fetch<string>(RECENT_URL)
        const $ = cheerio.load(html)
    
        const response: ReadAllResponse[] = []
    
        $(".instant").each((_index, element) => {
            const title = $(element).children(".instant-link").text()
            const audio = $(element).children(".small-button").attr("onclick")
            
            if (!audio) {
                return
            }
          
            const [, audioUrl] = audio.split("'")
          
            response.push({
                id: slugify(title),
                title,
                audioUrl: `${BASE_URL}${audioUrl}`,
            })
        })
    
        return response
    }

    async function readAllByCategory(categoryId: string) {
        const html = await $fetch<string>(`${CATEGORIES_INSTANTS_READ_ALL_URL}${categoryId}`)
        const $ = cheerio.load(html)
        
        const response: ReadAllResponse[] = []

        $(".instant").each((_index, element) => {
            const title = $(element).children(".instant-link").text()
            const audio = $(element).children(".small-button").attr("onclick")
            
            if (!audio) {
                return
            }
          
            const [, audioUrl] = audio.split("'")
          
            response.push({
                id: slugify(title),
                title,
                audioUrl: `${BASE_URL}${audioUrl}`,
            })
        })

        return response
    }

    return {
        readAll,
        search,
        recent,
        readAllByCategory
    }
}