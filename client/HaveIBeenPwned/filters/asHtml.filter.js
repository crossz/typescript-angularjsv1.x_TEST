var HaveIBeenPwned;
(function (HaveIBeenPwned) {
    "use strict";
    function asHtml($sce) {
        return function (text) {
            return $sce.trustAsHtml(text);
        };
    }
    HaveIBeenPwned.asHtml = asHtml;
    asHtml.$inject = ["$sce"];
    angular
        .module("HaveIBeenPwned")
        .filter("asHtml", asHtml);
})(HaveIBeenPwned || (HaveIBeenPwned = {}));
