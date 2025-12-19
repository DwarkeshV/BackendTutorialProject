const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise
            .resolve(requestHandler(req, res, next))
            .catch((error) => next(error));
    }
}
export { asyncHandler };

//Try Catch Method for handling async errors in express routes

// const asyncHandler = fn => async (req, res, next) => {
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         res.statuse(error.code || 500).json(
//             {
//                 success: false,
//                 message: error.message || "Internal Server Error"
//             }
//         )
//     }
// }

