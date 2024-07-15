export const signup = async (req, res, next) => {
    res.json({
        data: "You hit the signup endpoint",
    });
};

export const login = async (req, res, next) => {
    res.json({
        data: "You hit the login endpoint",
    });
};

export const logout = async (req, res, next) => {
    res.json({
        data: "You hit the logout endpoint",
    });
};