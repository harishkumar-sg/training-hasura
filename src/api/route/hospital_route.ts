import express from "express"
import { HospitalController } from "@api/controller/hospital.controller"
import { allColors } from "winston/lib/winston/config"

class HospitalRoute {
    public router: express.Router = express.Router();
    private hospitalcontroller : HospitalController;
    constructor(){
        this.hospitalcontroller= new HospitalController()
        this.assign();
    }
    private assign(){
        this.router.get(
            '/',
            this.hospitalcontroller.allEmployeeData
        )
        this.router.post(
            '/:name&:salary',
            this.hospitalcontroller.createEmployee
        )
        this.router.get(
            '/:name',
            this.hospitalcontroller.getEmployeeByName
        )
        this.router.get(
            '/id/:id',
            this.hospitalcontroller.getEmployeeById
        )
        this.router.put(
            '/:id',
            this.hospitalcontroller.
        )
    }
}

export default new HospitalRoute().router;










//import {alldata, alldatasorted, createdata, createdatabyrequest, deletedata, findbyid, findbyname, getsalary, sortby, updatedata} from  "../controller/hospital.controller"

// const router = express.Router()


//router.post('/',createdata)
// router.post('/:name&:sal',createdatabyrequest)
// router.get('/',alldata)
// router.get('/sorted',alldatasorted)
// router.get('/sortby',sortby)
// router.get('/findbyname/:name',findbyname)
// router.get('/findbyid/:id',findbyid)
// router.put('/:id',updatedata)
// router.delete('/:id',deletedata)
// router.get('/salary',getsalary)


// export {
//     router
// }

