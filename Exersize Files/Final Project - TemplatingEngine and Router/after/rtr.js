(function() {

    // testing the tmpl engine
    // var template = '<p>Hello, my name is <%this.name%>. I\'m <%this.profile.age%> years old.</p>';
    // console.log(TemplateEngine(template, {
    //     name: "Adnan Rahic",
    //     profile: { age: 22 }
    // }));


    // var template = 
    // 'My skills:' + 
    // '<%for(var index in this.skills) {%>' + 
    // '<a href="#"><%this.skills[index]%></a>' +
    // '<%}%>';
    // console.log(tmpl(template, {
    //     skills: ["js", "html", "css"]
    // }));





    // A hash to store our routes:
    var routes = {};
    // The route registering function:
    this.route = function route (path, templateId, controller) {
        // Allow only routes with correct number of arguments:
        if (arguments.length === 3) {
            routes[path] = {templateId: templateId, controller: controller};            
        } else {
            console.log("Route needs 3 arguments.");
        }
    }

    var el = null, current = null;
    function router () {
        // Current route url (getting rid of '#' in hash as well):
        var url = location.hash.slice(1) || '/';
        // Get route by url:
        var route = routes[url];
        console.log(url);
        console.log(route);
        // Lazy load view element:
        el = el || document.getElementById('view');
        // Clear existing route info:
        if (current) {
            current = null;
        }
        // Do we have both a view and a route?
        if (el && route && route.controller) {
            // Set current route information:
            current = {
                template: route.templateId,
                controller: new route.controller(), 
                render: function () {
                    // Render route template with "tmpl" template engine:
                    el.innerHTML = tmpl(this.template, this.controller);
                    console.log(el.innerHTML);
                }
            };
            // Render directly:
            current.render();
        }
    }
    // Listen on hash change:
    this.addEventListener('hashchange', router);
    // Listen on page load:
    this.addEventListener('load', router);


})();