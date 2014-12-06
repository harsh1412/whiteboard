angular.module('templates-main', ['/view/404.html', '/view/app/about.html', '/view/app/home.html', '/view/course/announce.html', '/view/course/course.html', '/view/course/edit.html', '/view/course/new.html', '/view/course/search.html', '/view/header.html', '/view/resource/new.html', '/view/resource/resource.html', '/view/user/edit.html', '/view/user/login.html', '/view/user/register.html', '/view/user/user.html']);

angular.module("/view/404.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/view/404.html",
    "<div class=\"container\"><div style=\"margin-top:50px\" class=\"text-center alert alert-danger\"><h2>Tyvärr existerar inte sidan som du letar efter</h2><p>Detta kan bero på att sidan har tagits bort eller aldrig existerat.</p><br><a href=\"/\" onclick=\"window.history.go(-1); return false\">Gå tillbaka</a> eller <a href=\"/\">Gå till första sidan</a></div></div>");
}]);

angular.module("/view/app/about.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/view/app/about.html",
    "<div class=\"container\"><h1>About</h1></div>");
}]);

angular.module("/view/app/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/view/app/home.html",
    "<div class=\"container\"><form name=\"search-form\"><div class=\"form-group\"><input type=\"text\" name=\"text\" ng-model=\"search.query\" class=\"form-control\" placeholder=\"Search...\" ng-change=\"search(search)\"></div></form><div ng-show=\"search.query.length\"><div ng-show=\"courses.length\"><strong>Courses:</strong><ul><li ng-repeat=\"c in courses\"><a href=\"/course/{{c.code}}\"><h4>{{c.code | uppercase}} - {{c.title}} <small>{{c.period.season}} {{c.period.year}}</small></h4></a></li></ul></div><div ng-show=\"users.length\"><strong>Users:</strong><ul><li ng-repeat=\"u in users\"><a href=\"/user/{{u.email}}\"><h4>{{u.name}}</h4></a></li></ul></div></div></div>");
}]);

angular.module("/view/course/announce.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/view/course/announce.html",
    "<div class=\"container container-sm\"><h1>New announcement</h1><p>Announcments are much alike news letters and they are publicly available. Announcements are sent to all subscribers via email.</p><form name=\"new-course-form\" class=\"form-compact\" ng-submit=\"publish(a)\"><div class=\"form-group\"><div class=\"btn-group\" data-toggle=\"buttons\"><label class=\"btn btn-primary active\"><input type=\"checkbox\" checked=\"checked\" ng-model=\"managers\"> Author</label><label class=\"btn btn-primary\"><input type=\"checkbox\" ng-model=\"author\"> Managers</label><label class=\"btn btn-primary\"><input type=\"checkbox\"> Subscribers</label></div></div><div class=\"form-group\"><input ng-model=\"a.title\" name=\"title\" type=\"text\" class=\"form-control\" placeholder=\"Title\" required></div><div class=\"form-group\"><textarea ng-model=\"a.text\" name=\"text\" class=\"form-control\" placeholder=\"Text\" required rows=\"10\"></textarea></div><div class=\"form-group alert alert-danger\" ng-show=\"errors.form\"><label class=\"control-label\">Felmeddelanden</label><div class=\"controls\" ng-bind=\"errors.form\"></div></div><div class=\"form-group\"><div class=\"loading\" ng-show=\"loading\"></div><input type=\"submit\" name=\"submit-button\" class=\"btn btn-block btn-success btn-lg\" ng-hide=\"loading\" value=\"Publish\"></div></form><pre>{{a|json}}</pre></div>");
}]);

angular.module("/view/course/course.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/view/course/course.html",
    "<div id=\"notFoundView\" ng-include=\"'/view/404.html'\" style=\"display:none\"></div><div class=\"container\" id=\"articleView\"><ul class=\"list-unstyled list-inline\" ng-show=\"1 || user && (user._id == course.author._id || course.managers.indexOf(user) != -1)\"><li><a ng-href=\"/course/{{course.code}}/edit\" class=\"btn btn-primary\">Edit</a></li><li><div class=\"dropdown\"><button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\">New resource <span class=\"caret\"></span></button><ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu1\"><li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"/course/{{course.code}}/resource/new\">Document</a></li><li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">File</a></li><li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">URL</a></li><li role=\"presentation\" class=\"divider\"></li><li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Assignment</a></li></ul></div></li><li><a ng-href=\"/course/{{course.code}}/announce\" class=\"btn btn-primary\">Announce</a></li></ul><h1>{{course.code | uppercase}} - {{course.title}} <small>{{course.period.season}} {{course.period.year}}</small></h1><div id=\"frontpage\"></div><div ng-show=\"course.resources.length\"><hr><ul class=\"list-unstyled\"><li ng-repeat=\"r in course.resources\"><a ng-href=\"/course/{{course.code}}/resource/{{r._id}}\"><h5>{{r.title}}</h5></a></li></ul></div><hr><div class=\"row\"><div class=\"col-xs-4 col-md-2\"><strong>Author</strong><ul class=\"list-unstyled list-inline\"><li><a ng-href=\"/user/{{course.author.email}}\">{{course.author.name}}</a></li></ul></div><div class=\"col-xs-8 col-md-10\"><strong>Managers</strong><ul class=\"list-unstyled list-inline\"><li ng-repeat=\"manager in course.managers\"><a ng-href=\"/user/{{manager.email}}\">{{manager.name}}</a></li></ul></div></div></div>");
}]);

angular.module("/view/course/edit.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/view/course/edit.html",
    "<div class=\"container\"><form name=\"new-course-form\" class=\"form-compact\" ng-submit=\"save()\"><div class=\"form-group\"><input ng-model=\"course.title\" name=\"title\" type=\"text\" class=\"form-control\" placeholder=\"Title\" required></div><div class=\"form-group\" ng-if=\"course.period\"><div class=\"row\"><div class=\"col-xs-6\"><select ng-model=\"course.period.season\" class=\"form-control\"><option>Spring</option><option>Summer</option><option>Autumn</option><option>Winter</option></select></div><div class=\"col-xs-6\"><select ng-model=\"course.period.year\" class=\"form-control\"><option>2014</option><option>2015</option><option>2016</option><option>2017</option></select></div></div></div><div class=\"form-group\"><form class=\"form-inline\" role=\"form\"><div class=\"form-group\"><label class=\"sr-only\" for=\"exampleInputEmail2\">Email address</label><input type=\"email\" class=\"form-control\" id=\"exampleInputEmail2\" placeholder=\"Enter email\"></div><button type=\"submit\" class=\"btn btn-default\" ng-click=\"addManager()\">Add manager</button></form></div><div class=\"form-group\"><div class=\"wmd-panel\"><div id=\"wmd-button-bar\"></div><textarea class=\"wmd-input\" id=\"wmd-input\" ng-model=\"course.frontpage\"></textarea></div></div><div class=\"form-group alert alert-danger\" ng-show=\"errors.form\"><label class=\"control-label\">Felmeddelanden</label><div class=\"controls\" ng-bind=\"errors.form\"></div></div><div class=\"form-group\"><div class=\"loading\" ng-show=\"loading\"></div><input type=\"submit\" name=\"submit-button\" class=\"btn btn-success\" ng-hide=\"loading\" value=\"Save\"></div><div class=\"checkbox\"><label><input type=\"checkbox\" ng-model=\"preview\"> Preview</label><div ng-show=\"preview\"><hr><div id=\"wmd-preview\" class=\"wmd-panel wmd-preview\"></div></div></div></form></div>");
}]);

angular.module("/view/course/new.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/view/course/new.html",
    "<div class=\"container container-sm\"><h1 class=\"text-center\">Create course</h1><form name=\"new-course-form\" class=\"form-compact\" ng-submit=\"publish(course)\"><div class=\"form-group\"><input ng-model=\"course.code\" name=\"code\" type=\"text\" class=\"form-control\" placeholder=\"Code\" required></div><div class=\"form-group\"><input ng-model=\"course.title\" name=\"title\" type=\"text\" class=\"form-control\" placeholder=\"Title\" required></div><div class=\"checkbox\"><label><input type=\"checkbox\" ng-model=\"assignPeriod\"> <abbr title=\"If you are going to manage a course with and exisiting course ID then it is approprite to assing a period to the course to avoid dupplocations.\">Associate period</abbr></label></div><div class=\"form-group\" ng-show=\"assignPeriod\"><div class=\"row\"><div class=\"col-xs-6\"><select ng-model=\"course.period.season\" class=\"form-control\"><option>Spring</option><option>Summer</option><option>Autumn</option><option>Winter</option></select></div><div class=\"col-xs-6\"><select ng-model=\"course.period.year\" class=\"form-control\"><option>2014</option><option>2015</option><option>2016</option><option>2017</option></select></div></div></div><div class=\"form-group alert alert-danger\" ng-show=\"errors.form\"><label class=\"control-label\">Felmeddelanden</label><div class=\"controls\" ng-bind=\"errors.form\"></div></div><div class=\"form-group\"><div class=\"loading\" ng-show=\"loading\"></div><input type=\"submit\" name=\"submit-button\" class=\"btn btn-block btn-success btn-lg\" ng-hide=\"loading\" value=\"Publicera\"></div></form></div>");
}]);

angular.module("/view/course/search.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/view/course/search.html",
    "<div class=\"container\"><div class=\"row\"><div class=\"col-xs-12 col-md-4 col-lg-4 card-animation\" ng-repeat=\"card in articles\" ng-include=\"'/view/article/card.html'\"></div></div><div class=\"clearfix\"></div><div class=\"loading\" ng-show=\"loading\"></div><h4 class=\"empty-result\" ng-show=\"noMore\">Inga fler resultat hittades!</h4></div>");
}]);

angular.module("/view/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/view/header.html",
    "<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\" ng-controller=\"AuthCtrl\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\"><span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"/\"></a></div><div class=\"collapse navbar-collapse navbar-ex1-collapse\"><ul class=\"nav navbar-nav\"><li><a href=\"/\" title=\"\">Search</a></li><li ng-hide=\"user\"><a href=\"/user/login\" title=\"\">Login</a></li><li ng-show=\"user\"><a href=\"\" ng-click=\"logout()\">Logout</a></li><li ng-show=\"user\"><a href=\"/user/{{user.email}}\" title=\"\" ng-bind=\"user.name\"></a></li></ul></div></div></nav>");
}]);

angular.module("/view/resource/new.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/view/resource/new.html",
    "<div class=\"container\"><h1>New resource</h1><form name=\"new-resource-form\" class=\"form-compact\" ng-submit=\"publish(r)\"><div class=\"form-group\"><input ng-model=\"r.title\" name=\"title\" type=\"text\" class=\"form-control\" placeholder=\"Title\" required></div><div class=\"form-group\"><div class=\"wmd-panel\"><div id=\"wmd-button-bar\"></div><textarea class=\"wmd-input\" id=\"wmd-input\" ng-model=\"r.body\"></textarea></div></div><div class=\"checkbox\"><label><input type=\"checkbox\" ng-model=\"preview\"> Preview</label><div ng-show=\"preview\"><hr><div id=\"wmd-preview\" class=\"wmd-panel wmd-preview\"></div></div></div><div class=\"form-group alert alert-danger\" ng-show=\"errors.form\"><label class=\"control-label\">Felmeddelanden</label><div class=\"controls\" ng-bind=\"errors.form\"></div></div><div class=\"form-group\"><div class=\"loading\" ng-show=\"loading\"></div><input type=\"submit\" name=\"submit-button\" class=\"btn btn-block btn-success btn-lg\" ng-hide=\"loading\" value=\"Publicera\"></div></form></div>");
}]);

angular.module("/view/resource/resource.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/view/resource/resource.html",
    "<div class=\"container\"><h1><a ng-href=\"/course/{{courseId}}\">{{courseId | uppercase }}</a> - {{resource.title}}</h1><div id=\"body\"></div><small ng-bind=\"resource.created | date\"></small> <small ng-bind=\"resource.author\"></small></div>");
}]);

angular.module("/view/user/edit.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/view/user/edit.html",
    "<div class=\"container container-xs\" ng-show=\"user\"><form name=\"register-form\" ng-submit=\"update(u)\"><div class=\"form-group\"><input type=\"text\" class=\"form-control\" name=\"name\" ng-model=\"u.name\" placeholder=\"Full name\" required></div><div class=\"form-group\"><input type=\"email\" class=\"form-control\" name=\"email\" ng-model=\"u.email\" placeholder=\"Email\" required></div><div class=\"form-group\"><input type=\"tel\" class=\"form-control\" name=\"phone\" ng-model=\"u.phone\" placeholder=\"Phone\"></div><div class=\"form-group\"><input type=\"submit\" class=\"btn btn-success btn-block\" value=\"Register\"></div></form><a href=\"/user/login\">Login</a></div>");
}]);

angular.module("/view/user/login.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/view/user/login.html",
    "<div class=\"container container-xs\"><form name=\"login-form\" ng-submit=\"login(u)\"><div class=\"form-group\"><input type=\"text\" name=\"email\" class=\"form-control\" placeholder=\"Email\" ng-model=\"u.email\" required></div><div class=\"form-group\"><input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" ng-model=\"u.password\" required></div><div class=\"form-group\"><input type=\"submit\" value=\"Log In\" class=\"btn btn-block btn-success\"></div></form><a href=\"/user/register\">Register</a></div>");
}]);

angular.module("/view/user/register.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/view/user/register.html",
    "<div class=\"container container-xs\"><form name=\"register-form\" ng-submit=\"register(u)\"><div class=\"form-group\"><input type=\"text\" class=\"form-control\" name=\"name\" ng-model=\"u.name\" placeholder=\"Full name\" required></div><div class=\"form-group\"><input type=\"email\" class=\"form-control\" name=\"email\" ng-model=\"u.email\" placeholder=\"Email\" required></div><div class=\"form-group\"><input type=\"password\" class=\"form-control\" name=\"password\" ng-model=\"u.password\" placeholder=\"Password\" required></div><div class=\"form-group\"><input type=\"submit\" class=\"btn btn-success btn-block\" value=\"Register\"></div></form><a href=\"/user/login\">Login</a></div>");
}]);

angular.module("/view/user/user.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/view/user/user.html",
    "<div id=\"notFoundView\" ng-include=\"'/view/404.html'\" style=\"display:none\"></div><div class=\"container\" id=\"userView\"><div class=\"page-header\"><img ng-source=\"user.picture\" width=\"64px\"><h1>{{user.name}} <small>{{user.status}}</small></h1><p ng-bind=\"user.bio\"></p><ul class=\"list-unstyled list-inline\"><li><strong>Email:</strong> <a ng-href=\"mailto:{{user.email}}\">{{user.email}}</a></li><li ng-show=\"user.phone\"><strong>Phone:</strong> <a ng-href=\"tel:{{user.phone}}\">{{user.phone}}</a></li><li ng-show=\"user.homepage\"><strong>Homepage:</strong><a ng-href=\"{{user.homepage}}\">{{user.homepage}}</a></li></ul></div><h4>Courses <small>{{user.courses.length}} courses</small></h4><table class=\"table table-hover\"><thead ng-show=\"user.courses.length\"><th width=\"50px\">ID</th><th>Title</th><th width=\"50px\">Season</th><th width=\"50px\">Period</th><th width=\"160px\">Role</th></thead><tbody><tr ng-repeat=\"c in user.courses\"><td>{{c.code | uppercase}}</td><td><a href=\"/course/{{c.code}}\" title=\"{{c.managers.length}} managers | {{c.subscribers.length}} subscribers\">{{c.title}}</a></td><td>{{c.period.season}}</td><td>{{c.period.year}}</td><td><span ng-if=\"c.managers.indexOf(user._id) != -1\">Manager</span> <span ng-if=\"c.author == user._id\">Author</span> <span ng-if=\"c.subscribers.indexOf(user._id) != -1\">Student</span></td></tr></tbody></table><a href=\"/course/new\" class=\"btn btn-primary btn-block btn-lg\">Create a new course</a></div>");
}]);
