describe("WriteFileSpec", () => {
    var writer = require("../../lib/writeFile");
    var fs = require('fs');

    afterEach(() => {
        fs.unlinkSync("./newfile.txt");
    });

    describe("when create file is called", () => {
        it("should create file", () => {
            writer.createFile();
            expect(fs.existsSync("./newfile.txt")).toBe(true);
        });
    });
});