const {z} = require('zod')

const user = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
    email: z.email("Please enter a valid email"),
    password: z.string().min(6 , "Password must be at least 6 characters long").regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, "Password must contain at least one letter and one number"),
})

const loginUser = z.object({
    email: z.email("Please enter a valid email"),
    password: z.string().min(6 , "Password must be at least 6 characters long").regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, "Password must contain at least one letter and one number"),
})

module.exports = { user, loginUser }