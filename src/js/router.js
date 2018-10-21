export class Router {

    constructor(routes){
        this.routes = routes;
        this.rootElem = document.getElementById('app');
        this.init();
    }

    init() {
        const routes = this.routes;
        const scope = this;
        window.addEventListener('hashchange', function (e) {
            scope.hasChanged(routes);
        });
        this.hasChanged(routes);
    }

    hasChanged(routes){

        if (window.location.hash.length > 0) {
            routes.forEach(route => {
                if(route.isActiveRoute(window.location.hash.substr(1))) {
                    this.goToRoute(route);
                }
            });
        } else {
            routes.forEach(route => {
                if(route.default) {
                    this.goToRoute(route);
                }
            });
        }
    }

    goToRoute(route) {
        const url = `views/${route.htmlName}`;
        fetch(url).then(response => {
            return response.text();
        }).then(html => {
            this.rootElem.innerHTML = html;
            route.getPageData();
        }).catch(err => {
            consoel.error(err.message);
        });
    }
}

