import { categoriesController } from "../../controllers"

export default defineEventHandler(async () => {
    const response = categoriesController.readAllCategories()
    return response
})