const Employee = require('../modals/Employee')

exports.getEmployees =  async (req, res) => {
    const employee = await Employee.find()
    res.render('index', {
        employee,
    })
}

exports.newEmployee = (req, res) => {
    return res.render('create')
}

exports.storeEmployee = async (req, res) => {
    try {
        const employee = new Employee(req.body)
        await employee.save();
        return res.redirect('/')
    } catch (err) {
        console.log('error in saving data in db', err)
        return res.redirect('/')
    }
}

exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id)
        res.render('post', {
            employee
        })
    } catch (err) {
        console.log('error while fetching blog with id', err)
    }
}