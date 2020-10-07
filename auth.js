const jwt = require('jsonwebtoken');
const { jwtConfig } = require('./config');
const { secret, expiresIn } = jwtConfig;
const bearerToken = require('express-bearer-token');
const db = require('./db/models');
const { User } = db;

const restoreUser = (req, res, next) => {
    const { token } = req;

    if (!token) {
        return res.set("WWW-Authenticate", "Bearer").status(401).end();
    }

    return jwt.verify(token, secret, null, async (err, jwtPayload) => {
        // TODO: Define asynchronous function for jwtPayload logic
        if (err) {
            err.status = 401;
            return next(err);
        }
        const { id } = jwtPayload.data;
        try {
            req.user = await User.findByPk(id);
        } catch (e) {
            return next(e);
        }

        if (!req.user) {
            return res.set("WWW-Authenticate", "Bearer").status(401).end();
        }
        return next();

    });
};

const requireAuth = [bearerToken(), restoreUser];

const getUserToken = (user) => {
    const userDataForToken = {
        id: user.id,
        email: user.email,
    };
    const token = jwt.sign(
        { data: userDataForToken },
        secret,
        { expiresIn: 300000000000000000 }
        // { expiresIn: parseInt(expiresIn, 10) } // 604,800 seconds = 1 week
    );

    return token;
};


const signedIn = (req, res) => {
    const { token } = req.body;


    return jwt.verify(token, secret, null, async (err, jwtPayload) => {
        // TODO: Define asynchronous function for jwtPayload logic
        if (err) {
            return false;
        }
        const { id } = jwtPayload.data;
        try {
            const providedUser = await User.findByPk(req.body.id)
            const tokenInformationUser = await User.findByPk(id);
            if (providedUser.email === tokenInformationUser.email) {
                return true
            } else {
                return false
            }
        } catch (e) {
            return false;
        }



    });
};



module.exports = { getUserToken, requireAuth, signedIn };
