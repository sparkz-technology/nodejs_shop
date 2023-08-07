exports.getLogin = (req, res, next) => {
  //   const isLoggedIn = req.get("Cookie").split("=")[1] === "true";
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: false,
  });
};
exports.postLogin = (req, res, next) => {
  //   res.isLoggedIn = true;
  //   res.setHeader("Set-Cookie", "loggedIn=true;HttpOnly"); // HttpOnly prevents client side JS from accessing the cookie
  req.session.isLoggedIn = true;
  res.redirect("/");
};
