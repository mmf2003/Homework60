export const getUsers = (req, res) => {
    res.send("Get users route");
};

export const createUser = (req, res) => {
    res.send("Post users route");
};

export const getUserById = (req, res) => {
    res.send(`Get user by Id route: ${req.params.userId}`);
};

export const updateUser = (req, res) => {
    res.send(`Put user by Id route: ${req.params.userId}`);
};

export const deleteUser = (req, res) => {
    res.send(`Delete user by Id route: ${req.params.userId}`);
};
