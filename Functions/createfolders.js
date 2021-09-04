const fs = require("fs");

function createfolders() {
    fs.mkdir("./handlers")
    fs.mkdir("./SlashCommands")
    fs.mkdir("./events")
}

module.exports = createfolders