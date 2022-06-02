// Id para a rota Activities - GET
exports.getId = {
    primeiroIdSuccess: {
        id: 1,
        responseBody: {
            id: 1,
            title: "Activity 1",
            dueDate: "2022-06-02T12:58:29.3558472+00:00",
            completed: false
        }
    },

    primeiroIdError: {
        id: "fet",
        responseBody: {
            id:1,
            title: "Activity 1",
            dueDate: "2022-06-02T12:58:29.3558472+00:00",
            completed: false
        }
    },
    
    headers: {
        apiSupportedVersions: 1.0,
        contentType: "application/json",
        charset: "utf-8",
        v: 1.0,
        date: "Thu02 Jun 2022 11: 58: 28 GMT",
        server: "Kestrel",
        transferEncoding: "chunked"
    }
}


// DELETE
exports.deleteId = {
    primeiroIdSuccess: {
        id: 1
    },

    primeiroIdError: {
        id: "@"
    },

    headers: {
        accessControlAllowOrigin: '*', 
        apiSupportedVersions: 1.0, 
        contentLength: 0,
        date: "Thu02 Jun 2022 12:27:40 GMT", 
        server: "Kestrel"
    }
}

exports.postPayload = {
    payload: {
        "id": 0,
        "title": "string",
        "dueDate": "2022-06-02T12:55:11.573Z",
        "completed": true
    },

    responseBody: {
        "id": 0,
        "title": "string",
        "dueDate": "2022-06-02T12:55:11.573Z",
        "completed": true
    },

    payloadError: {
        "title": "string",
        "dueDate": "20222T13:13:08.41",
        "comple": true
    },

    responseBodyError: {
        "type": "https://tools.ietf.org/html/rfc7231#section-6.5.1",
        "title": "One or more validation errors occurred.",
        "status": 400,
        "traceId": "00-fa3d2c166b936d418b7cdd2d0d5464ac-1086a3650349774f-00",
        "errors": {
          "$.dueDate": [
            "The JSON value could not be converted to System.DateTime. Path: $.dueDate | LineNumber: 0 | BytePositionInLine: 47."
          ]
        }
    },

    headers: {
        accessControlAllowOrigin: '*', 
        apiSupportedVersions: 1.0, 
        contentType: "application/json", 
        charset: "utf-8", 
        v: 1.0,
        date: "Thu02 Jun 2022 12:55:18 GMT", 
        server: "Kestrel", 
        transferEncoding: "chunked"
    }
}


// PUT
exports.put = {
    payload: {
        id: 0,
        body: {
            "id": 0,
            "title": "string",
            "dueDate": "2022-06-02T13:30:15.762Z",
            "completed": true
        }
    },

    responseBody: {
        "id": 0,
        "title": "string",
        "dueDate": "2022-06-02T13:30:15.762Z",
        "completed": true
    },

    payloadError: {
        id: "@",
        body: {
            "title": "string",
            "dueDate": "2022-0630:1562Z",
            "completed": true 
        }
    },

    responseBodyError: {
        "type": "https://tools.ietf.org/html/rfc7231#section-6.5.1",
        "title": "One or more validation errors occurred.",
        "status": 400,
        "traceId": "00-2de0f5da4e47804e829e30ed67b14700-04b6d658f592964f-00",
        "errors": {
          "$.dueDate": [
            "The JSON value could not be converted to System.DateTime. Path: $.dueDate | LineNumber: 0 | BytePositionInLine: 45."
          ]
        }
    },

    headers: {
        accessControlAllowOrigin: "*",
        apiSupportedVersions: 1.0,
        contentType: "application/json; charset=utf-8; v=1.0",
        date: "Thu02 Jun 2022 13:38:16 GMT",
        server: "Kestrel",
        transferEncoding: "chunked"
    }
}