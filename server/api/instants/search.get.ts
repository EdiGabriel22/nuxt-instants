import { instantsController } from "~/server/controllers"

export default defineEventHandler(async (event) => {
    const { q } = getQuery(event)
    if (!q) {
        throw createError({
            status: 400,
            statusMessage: "Search  term 'q' not provided"
        })
    }

    const response = instantsController.search(String(q))
    return response
})