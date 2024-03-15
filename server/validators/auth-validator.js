const { z } = require('zod');

// loginSchema 

const loginSchema = z.object({
    email: z
        .string({ required_error: "Name is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least 3 characters" })
        .max(255, { message: "Email must be at most 255 characters" }),

    password: z
        .string({ required_error: "Password is required" })
        .min(7, { message: "Password must be at least 6 characters" })
        .max(1024, { message: "Password must be at most 1024 characters" })

})

// Create a new schema

const signupSchema = loginSchema.extend({

    name: z.
        string({ required_error: "Name is required" })
        .trim()
        .min(6, { message: "Name must be at least 6 characters long" })
        .max(25, { message: "Name must be at most 25 characters long" }),

    phone: z.
        string({ required_error: "Phone is required" })
        .min(10, { message: "Phone must be at least 10 digits long" })
        .max(25, { message: "Phone must be at most 25 digits" }),

    email: z
        .string({ required_error: "Name is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least 3 characters" })
        .max(255, { message: "Email must be at most 255 characters" }),

    password: z
        .string({ required_error: "Password is required" })
        .min(7, { message: "Password must be at least 6 characters" })
        .max(1024, { message: "Password must be at most 1024 characters" })
});




module.exports = { signupSchema, loginSchema };