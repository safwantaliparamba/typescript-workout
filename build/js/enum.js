"use strict";
var UserCount;
(function (UserCount) {
    UserCount[UserCount["one"] = 1] = "one";
    UserCount[UserCount["two"] = 2] = "two";
    UserCount[UserCount["three"] = 3] = "three";
})(UserCount || (UserCount = {}));
const ONE = UserCount.one;
