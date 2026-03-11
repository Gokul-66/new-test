export function authMiddleware() {
  return (req, res, next) => {
    if ("admin" === req.params.role) {
      next();
    } else {
      res.status(403).send('Access denied');
    }
  };
}