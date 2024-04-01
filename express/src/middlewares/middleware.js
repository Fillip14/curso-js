exports.middlewareGlobal = (req, res, next) => {
  if (req.body.cliente) {
    console.log();
    console.log(`Vi que voce postou ${req.body.cliente}`);
  }
  next();
};
