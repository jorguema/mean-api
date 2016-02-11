'use strict';

var endpointsDescription = [];
module.exports = {

    getApiDocumentation: function () {
        var response = [];
        endpointsDescription.forEach(function (item) {
            console.log('\n****************** ' + item.controller + ' **************************\n');
            var itemResponse = { controller: null, routes: [] };
            itemResponse.controller = item.controller;
            for (var key in item.router.stack) {
                var val = item.router.stack[key];
                if (val.route) {
                    val = val.route;
                    var _o = {};
                    _o[val.stack[0].method] = [val.path, val.path];
                    console.log(_o);
                    itemResponse.routes.push(_o);
                }
            }
            response.push(itemResponse);
        }, this);
        
        return response;
    },
    addDocumentation: function (key, routes) {
        endpointsDescription.push({
            controller: key,
            router: routes
        })
    }
};
