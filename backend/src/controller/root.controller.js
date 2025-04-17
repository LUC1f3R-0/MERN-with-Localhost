export const rootController = (request, response) => {
    console.log(request.body)
    return response.json({ success: true })
}