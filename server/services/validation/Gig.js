const {z} = require('zod')

const gig = z.object({
    title: z.string().min(3, "Title must be at least 3 characters long"),
    description: z.string().min(3, "Description must be at least 3 characters long"),
    budget: z.number().min(1, "Budget must be at least 1"),
})

module.exports = gig