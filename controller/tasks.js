const task=require('../model/task')

const getAllTasks = async(req, res) => {
    try {
        const tasks= await task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const getTasks = async(req, res) => {
    try {
        const {id:taskId}=req.params
        const t= await task.findOne({_id:taskId})
        if(!t){
            return res.status(404).json({msg:`No task found with ID ${taskId}`})
        }
        res.status(200).json(t)
    } catch (error) {
        res.status(500).json(error)
    }
}
const createTasks = async(req, res) => {
    try {
        const t=await task.create(req.body)
        res.status(201).json({t})   
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const updateTasks =async (req, res) => {
    try {
        const {id:taskId}=req.params
        const t= await task.findOneAndUpdate({_id:taskId},req.body,{new:true,runValidators:true})
        if(!t){
            return res.status(404).json({msg:`No task found with ID ${taskId}`})
        }
        res.status(200).json(t)
    } catch (error) {
        res.status(500).json(error)
    }
}
const deleteTasks =async (req, res) => {
    try {
        const {id:taskId}=req.params
        const t= await task.findOneAndDelete({_id:taskId})
        if(!t){
            return res.status(404).json({msg:`No task found with ID ${taskId}`})
        }
        // res.status(200).json(t)
        // res.status(200).send()
        res.status(200).json({task:null,status:'success'})
    } catch (error) {
        res.status(500).json(error)
    }
}
module.exports = {
    getAllTasks, getTasks, createTasks, updateTasks, deleteTasks,
}