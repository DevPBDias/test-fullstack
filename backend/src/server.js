import "dotenv/config";
import app from "./app.js";

const port = process.env.PORT || 3004;
app.listen(port, () => console.log(`Server running on port: ${port}`));
