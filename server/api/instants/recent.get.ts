import { instantsController } from "../../controllers"

export default defineEventHandler(async () => {
    const response = instantsController.recent()
    return response
})