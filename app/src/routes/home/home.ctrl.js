"use strict";

const output = {
  home: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },
};

const users = {
    id: ["kim", "kyoung","cheon"],
    psword : ["1234", "1234", "12345"]
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
        psword = req.body.psword;
    console.log(id, psword);
    console.log(req.body);
    if (users.id.includes(id)){
        const idx = users.id.indexOf(id);
        if (users.psword[idx]===psword){
            return res.json({
                sucess:true,
            });
        }
    }
    return res.json({
        success: false,
        msg: "login fail",
    });
  },
};

module.exports = {
  output,
  process,
};
