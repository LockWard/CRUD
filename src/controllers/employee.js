import { pool } from "../cn.js"

export const postEmployees = async (req, res) => {
    const {name, salary} = req.body
    const [rows] = await pool.query('insert into employee (name, salary) values (?, ?)',[name, salary])
    res.send({
        id: rows.insertId,
        name,
        salary,
    })}

export const getEmployees = async (req, res) => {
    const [rows] = await pool.query('select * from employee')
    res.json({rows})
}

export const getEmployee = async (req, res) => {
    const [rows] = await pool.query('select * from employee where id = ?', [req.params.id])
    //console.log(rows)
    if (rows.length <= 0) return res.status(404).json({
        message: 'Employee not found'
    })
    res.json(rows[0])
}

export const putEmployees = async (req, res) => {
    const {id} = req.params
    const {name, salary} = req.body

    const [result] = await pool.query('update employee set name = ?, salary = ? where id = ?', [name, salary, id])

    console.log(result)

    res.json('received')
}

export const deleteEmployees = async (req, res) => {
    const [result] = await pool.query('delete from employee where id = ?', [req.params.id])

    if(result.affectedRows <= 0 ) return res.status(404).json({
        message: 'Employee not found'
    })

    res.sendStatus(204)
}

