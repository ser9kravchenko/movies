
export class Route {
    constructor(name, htmlName, defaultRoute, getPageData) {
        this.name = name;
        this.htmlName = htmlName;
        this.default = defaultRoute;
        this.getPageData = getPageData;
    }

    isActiveRoute(hashedPath) {
        const path = hashedPath.split('/')[0];
        const name = this.name.split('/')[0];

        return path.replace('#', '') === name;
    }
}