export function Response(code, message, data) {
    return { code, message, data }
}

export function MessageResponse(message) {
    return Response(200, message)
}

export function DataResponse(data) {
    return Response(200, 'OK', data)
}

export function NotFoundResponse() {
    return ErrorResponse(404, 'Not Found')
}

export function MissingFieldResponse() {
    return ErrorResponse(400, 'Missing field')
}

export function ValidRequest(errorMessage) {
    return Response(200, errorMessage)
}

export function BadRequest(errorMessage){
    return Response(400, errorMessage)
}