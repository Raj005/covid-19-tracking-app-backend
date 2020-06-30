module.exports = ({ userService }) => async (req, res) => {
  try {
    const data = { ...req.body };

    const user = await userService.createUserService(data);

    // output filtering can be done here or maybe at the middleware level
    res.json({ data: user });
  } catch (err) {
    // handle errors properly here, parse them for the clients
    // map the mongoose error codes with relavant error strings
    console.log(err);
    res.json({ data: null, msg: err.errmsg, err: true });
  }
};
