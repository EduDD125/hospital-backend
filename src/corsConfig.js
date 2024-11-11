const cors = require("cors");

const corsOptions = {
    origin: "https://hospital-frontend-git-siteselenium-edudd125s-projects.vercel.app"
    methods: "GET, POST, PUT, DELETE"
};

const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;