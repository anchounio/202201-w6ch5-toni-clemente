/* eslint-disable no-unused-vars */
import * as crud from '../services/crud.js';
import { tasksConnect } from '../services/db.js';

const Task = tasksConnect();

export const getAllTasks = (req, res) => {
    crud.getAllTasks(Task).then((resp) => {
        res.json(resp);
    });
};

export const getTask = (req, res) => {
    crud.getTask(req.params.id, Task).then((resp) => {
        res.json(resp);
    });
};
export const insertTask = (req, res) => {
    crud.insertTask(req.body, Task).then((resp) => {
        res.json(resp);
    });
};

export const updateTask = (req, res) => {
    crud.updateTask(req.params.id, req.body, Task).then((resp) => {
        res.json(resp);
    });
};
export const deleteTask = (req, res) => {
    crud.deleteTask(req.params.id, Task).then((resp) => {
        res.json(resp);
    });
};
