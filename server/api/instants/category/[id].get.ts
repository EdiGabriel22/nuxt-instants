import { instantsController } from "../../../controllers"

export default defineEventHandler(async (event) => {
    const categoryId = getRouterParam(event, "id")
    if (!categoryId) {
        throw createError({
            status: 400,
            statusMessage: "`categoryId` not provided"
        })
    }
    const response = instantsController.readAllByCategory(categoryId)
    return response
})