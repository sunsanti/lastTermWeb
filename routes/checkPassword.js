const express = require("express");
const db = require("../models/dbConnect")

const router = express.Router();
router.use(express.json());

router.post("/checkPassword", (req,res) =>{
    const { name, email, address, password, confirm } = req.body; 


if(password === confirm && password !== "" && confirm !== "" && name !== "" && email !== "" && address !== ""){
        const query = 'INSERT INTO public."user" ("Name", "Email", "Address", "Password") VALUES($1,$2,$3,$4) RETURNING id';
        const  values = [ name, email, address, password ];

        db.query(query, values)
        .then(result => {
            res.status(200).json({ success: true, userId: result.rows[0].id })
        })

    } else {
        res.json({ success: false });
    }
})

router.post("/checkLogin", (req,res) =>{
    const { lginEmail, lginPass } = req.body; 

    if(lginEmail !== "" && lginPass !== ""){
        const query = 'SELECT * FROM public."user" WHERE "Email" = $1 AND "Password" = $2';
        const values = [ lginEmail, lginPass ];

        db.query(query, values)
        .then(result => {
            if(result.rows.length > 0){
                res.status(200).json({ success: true, user: result.rows[0] })
            } else {
                res.status(401).json({ success: false })
            }
        })
        // res.json({ success: true });
    } else {
        res.json({ success: false });
    }
})
module.exports = router;