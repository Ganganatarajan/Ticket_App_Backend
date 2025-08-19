export function notFound(req, res, _next) {
  res.status(404).json({ message: `Route not found: ${req.method} ${req.originalUrl}` });
}

export function errorHandler(err, _req, res, _next) {
  const status = err.statusCode || 500;
  const payload = {
    message: err.message || "Server error",
  };
  if (err.name === "ValidationError") {
    payload.message = "Validation error";
    payload.errors = Object.fromEntries(
      Object.entries(err.errors).map(([k, v]) => [k, v.message])
    );
    return res.status(400).json(payload);
  }
  res.status(status).json(payload);
}
