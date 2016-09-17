"use strict";

import UserModel = require("../models/User");
import { Request, Response } from 'express'

module ControllerUser {
    const userController: UserModel.User = new UserModel.User();

    export class UserController {
        public find(req: Request, res: Response) {
            res.json(userController.find(req.params.id));
        }
        public findAll(req: Request, res: Response) {
            res.json(userController.findAll());
        }

        public create(req: Request, res: Response) {
            res.json(userController.create(req.body));
        }

        public update(req: Request, res: Response) {
            res.json({result : userController.update(req.body)});
        }

        public delete(req: Request, res: Response) {
            res.json({result : userController.delete(req.params.id)});
        }
    }
}

export = ControllerUser;