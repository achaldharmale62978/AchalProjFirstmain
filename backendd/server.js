const mysql = require("mysql")

const express = require("express")

const app = express()

const cors = require("cors")

app.use(cors())
app.use(express.json())

var connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "projfirst"
})

connection.connect((error) => {
    if (error) {
        console.log(error)

    } else {
        console.log("data added")


        // enquery form
        app.get("/projdata", (req, res) => {
            const q = "SELECT * FROM projdata";

            connection.query(q, (error, data) => {
                if (error) {
                    console.log(error)
                    return res.status(500).send(error)
                }

                return res.json(data)
            })
        })

        app.post("/projdata", (req, res) => {

            const q = "INSERT INTO projdata(`fname`,`lname`,`bday`,`gender`,`city`,`email`,`phnum`,`pannum`,`aanum`,`add`) VALUES    ( ? , ? , ? , ? , ? , ? , ? , ? , ? , ?)"

            const values = [
                req.body.fname,
                req.body.lname,
                req.body.bday,
                req.body.gender,
                req.body.city,
                req.body.email,
                req.body.phnum,
                req.body.pannum,
                req.body.aanum,
                req.body.add
            ]

            connection.query(q, values, (error, data) => {
                if (error) {
                    console.log(error)
                    return res.status(500).send(error)
                }
                return res.json(data)

            })
        })


        app.get("/projdata/get/:id", (req, res) => {
            const userId = req.params.id;

            const q = "SELECT * FROM projdata where id=? "

            connection.query(q, [userId], (error, data) => {
                if (error) {
                    console.log(error)
                    return res.status(500).send(error)
                }
                return res.json(data)
            })
        })

        app.put("/projdata/reupdate/:id", (req, res) => {

            const userId = req.params.id;
            const q = "UPDATE projdata set `fname`= ? , `lname` = ? ,`bday`=? , `gender`=? , `city`=? ,`email` = ? , `phnum`=? , `pannum`=? , `aanum`=? , `add`=?  WHERE id=? "


            const values = [
                req.body.fname,
                req.body.lname,
                req.body.bday,
                req.body.gender,
                req.body.city,
                req.body.email,
                req.body.phnum,
                req.body.pannum,
                req.body.aanum,
                req.body.add,
                userId
            ]


            connection.query(q, values, (error, data) => {
                if (error) {
                    console.log(error)
                    return res.status(500).send(error)
                }
                return res.json(data)
            })

        })

        app.delete("/projdata/redelete/:id", (req, res) => {
            const userId = req.params.id;

            const q = "DELETE from projdata where id=? "

            connection.query(q, [userId], (error, data) => {
                if (error) {
                    console.log(error)
                    return res.status(500).send(error)
                }
                return res.json(data)
            })
        })


        // cibil form

        app.get("/cibil", (req, res) => {
            const q = "SELECT * FROM cibil"

            connection.query(q, (error, data) => {
                if (error) {
                    console.log(error)
                    return res.status(500).send({ error: "error while fetching error" })
                } return res.json(data)

            })
        })

        app.post("/cibil", (req, res) => {
            const q = "insert into cibil (`eid`,`cscore`,`csdate`,`status`,`remark`)values (?,?,?,?,?)"

            const values = [
                req.body.eid,
                req.body.cscore,
                req.body.csdate,
                req.body.status,
                req.body.remark
            ]
            connection.query(q, values, (error, data) => {
                if (error) {
                    console.log(error)
                    return res.status(500).send({ error: "error while fetching error" })
                } return res.json(data)

            })
        })



        app.get("/cibil/get/:eid", (req, res) => {
            const useId = req.params.eid;

            const q = "SELECT * FROM cibil where eid=? "

            connection.query(q, [useId], (error, data) => {
                if (error) {
                    console.log(error)
                    return res.status(500).send(error)
                }
                return res.json(data)
            })
        })


        app.delete("/cibil/cibildelete/:eid", (req, res) => {
            const useId = req.params.eid;

            const q = "DELETE from cibil where eid=? "

            connection.query(q, [useId], (error, data) => {
                if (error) {
                    console.log(error)
                    return res.status(500).send(error)
                }
                return res.json(data)
            })
        })

        // regestration form

        app.get("/registration", (req, res) => {
            const q = "SELECT * FROM projfirst.registration "

            connection.query(q, (error, data) => {
                if (error) {
                    console.log(error)
                    return res.status(500).send({ error: "error while fetching error" })
                } return res.json(data)

            })
        })

        app.post("/registration", (req, res) => {

            const q = "INSERT INTO registration (`idr`,`bfname`,`blname`,`bbday`,`genderr`,`bcity`,`bemail`,`bphnum`,`bpannum`,`baanum`,`badd`,`hname`,`sname`,`aname`,`cname`,`dname`,`state`,`zip`,`honame`,`stname`,`aaname`,`ciname`,`diname`,`st`,`ziip`,`llamount`,`ltenure`,`lpamount`,`lramount`,`lsta`,`lremark`,`atype`,`abalance`,`aahname`,`astatus`,`anum`,`ccname`,`cpost`,`min`,`ain`,`cadd`,`ccity`) VALUES( ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? ,? , ? , ? , ? , ? , ? , ? , ? , ? , ? ,? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? )"

            const registerdata = [
                req.body.idr,
                req.body.bfname,
                req.body.blname,
                req.body.bbday,
                req.body.genderr,
                req.body.bcity,
                req.body.bemail,
                req.body.bphnum,
                req.body.bpannum,
                req.body.baanum,
                req.body.badd,
                req.body.hname,
                req.body.sname,
                req.body.aname,
                req.body.cname,
                req.body.dname,
                req.body.state,
                req.body.zip,
                req.body.honame,
                req.body.stname,
                req.body.aaname,
                req.body.ciname,
                req.body.diname,
                req.body.st,
                req.body.ziip,
                req.body.llamount,
                req.body.ltenure,
                req.body.lpamount,
                req.body.lramount,
                req.body.lsta,
                req.body.lremark,
                req.body.atype,
                req.body.abalance,
                req.body.aahname,
                req.body.astatus,
                req.body.anum,
                req.body.ccname,
                req.body.cpost,
                req.body.min,
                req.body.ain,
                req.body.cadd,
                req.body.ccity,


            ]
            connection.query(q, registerdata, (error, data) => {
                if (error) {
                    console.log(error)
                    return res.status(500).send({ error: "error while fetching error" })
                } return res.json(data)

            })
        })



        app.get("/registration/get/:idr", (req, res) => {
            const registerId = req.params.idr;

            const q = "SELECT * FROM registration where idr=? "

            connection.query(q, [registerId], (error, data) => {
                if (error) {
                    console.log(error)
                    return res.status(500).send(error)
                }
                return res.json(data)
            })
        })


        app.put("/registration/cmupdate/:idr", (req, res) => {

            const registerId = req.params.idr;
            const q = "UPDATE registration set `idr`= ?  , `bfname`= ? , `blname` = ? ,`bbday`=? , `genderr`=? , `bcity`=? ,`bemail` = ? , `bphnum`=? , `bpannum`=? , `baanum`=? , `badd`=? , `hname`= ? , `aaname` = ? ,`cname`=? , `dname`=? , `state`=? ,`zip` = ? , `honame`=? , `stname`=? , `aaname`=? , `ciname`=? , `diname`= ? , `st` = ? ,`ziip`=? , `llamount`=? , `ltenure`=? ,`lpamount` = ? , `lramount`=? , `lsta`=? , `lremark`=? , `atype`=? , `abalance`= ? , `aahname` = ? ,`astatus`=? , `anum`=? , `cname`=? ,`cpost` = ? , `min`=? , `ain`=? , `cadd`=? , `ccity`=?  WHERE idr=? "


            const registerdata = [
                req.body.idr,
                req.body.bfname,
                req.body.blname,
                req.body.bbday,
                req.body.genderr,
                req.body.bcity,
                req.body.bemail,
                req.body.bphnum,
                req.body.bpannum,
                req.body.baanum,
                req.body.badd,
                req.body.hname,
                req.body.sname,
                req.body.aname,
                req.body.cname,
                req.body.dname,
                req.body.state,
                req.body.zip,
                req.body.honame,
                req.body.stname,
                req.body.aaname,
                req.body.ciname,
                req.body.diname,
                req.body.st,
                req.body.ziip,
                req.body.llamount,
                req.body.ltenure,
                req.body.lpamount,
                req.body.lramount,
                req.body.lsta,
                req.body.lremark,
                req.body.atype,
                req.body.abalance,
                req.body.ahname,
                req.body.astatus,
                req.body.anum,
                req.body.ccname,
                req.body.cpost,
                req.body.min,
                req.body.ain,
                req.body.cadd,
                req.body.ccity,
                registerId

            ]

            connection.query(q, registerdata, (error, data) => {
                if (error) {
                    console.log(error)
                    return res.status(500).send(error)
                }
                return res.json(data)
            })

        })

        app.delete("/registration/cmdelete/:idr", (req, res) => {
            const registerId = req.params.idr;

            const q = "DELETE from registration where idr=? "

            connection.query(q, [registerId], (error, data) => {
                if (error) {
                    console.log(error)
                    return res.status(500).send(error)
                }
                return res.json(data)
            })
        })

    }

})


app.listen(8090, () => {
    console.log("data inserted... 8090...")
})