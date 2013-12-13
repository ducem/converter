/*global describe,beforeEach,it,expect,waitsFor,runs*/

var Configuration = require("core/configuration").Configuration;

describe("configuration-specs", function () {

    var configuration = null;

    beforeEach(function () {
        configuration = Configuration.create();
    });

    it("should has been correctly initialized", function () {
        expect(configuration.units).not.toBeNull();
    });

});
