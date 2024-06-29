'use strict';

import { RouterModule } from '@jamilservices/sb-module-router';
const routers = RouterModule.instance();

routers.register({
    id: "home",
    title: "Viral Attract - Home"
});

routers.register({
    id: "404",
    redirect: "home"
})

export default Object.freeze({});