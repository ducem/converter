/*global describe,beforeEach,it,expect,waitsFor,runs*/

var Converter = require("core/converter").Converter;

describe("configuration-specs", function () {

    var converter = Converter.create();

    it("should has been correctly initialized ", function () {
        expect(converter.configuration).not.toBeNull();
    });

});
