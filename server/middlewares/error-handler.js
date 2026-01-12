function errorHandler(err, req, res, next) {
    const status = err.status || 500
    res.status(status).send({ error: err.message || "Something went wrong" })
}

module.exports = errorHandler