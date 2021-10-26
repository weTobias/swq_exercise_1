describe("WriteFileSpec", () => {
    var writer = require("../../lib/writeFile");
    var fs = require('fs');

    describe("when create file is called", () => {
        afterEach(() => {
            fs.unlinkSync("./newfile.txt");
        });
        
        it("should create file", () => {
            writer.createFile();
            expect(fs.existsSync("./newfile.txt")).toBe(true);
        });
    });
});