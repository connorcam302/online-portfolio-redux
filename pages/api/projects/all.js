import projectArray from "../../data/projectArray";

export default function handler(req, res) {
  let time = new Date()
  console.log(`\x1b[34m   time - \x1b[0m ${time.toLocaleString()}`)
  console.log('\x1b[32m   endpoint - \x1b[0m /api/project/all')
  console.log("\x1b[31m   status - \x1b[0m 200")
  res
    .status(200)
    .json(projectArray);
}
