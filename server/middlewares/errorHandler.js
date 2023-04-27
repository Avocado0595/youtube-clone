// listen error and response

const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong !";

  console.log(err);
  return res.status(status).json({
    status,
    message,
  });
};

export default errorHandler;
