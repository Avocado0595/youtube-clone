import { Router } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import config from "../../config/config.js";


const router = Router();

router.get("/login/success", (req, res) => {
    if (req.user) {
        const { __v, createdAt, updatedAt, googleId, ...others } = req.user._doc;

        const token = jwt.sign({ id: req.user._id }, config.secretKey, {
            expiresIn: "1h"
        })
        res.status(200).json({
            user: {
                ...others
            }, token
        });

    }
});

router.get("/logout", (req, res) => {

})

// initial authentication flow
router.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

// handle response from google
// router.get(
//     "/oauth2/redirect/google",
//     passport.authenticate("google", {
//         successRedirect: "/auth/login"
//     })
// );

export default router;
