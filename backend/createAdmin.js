const bcrypt = require("bcrypt")
const signModel = require("./models/signup")
require("./connection")

async function createAdmin() {
  const existingAdmin = await signModel.findOne({ email: "admin@gmail.com" })

  if (existingAdmin) {
    console.log("Admin already exists")
    process.exit()
  }

  const hashedPassword = await bcrypt.hash("admin123", 10)

  await signModel.create({
    name: "Admin",
    email: "admin@gmail.com",
    password: hashedPassword,
    role: "admin"
  })

  console.log("Admin created successfully")
  process.exit()
}

createAdmin()