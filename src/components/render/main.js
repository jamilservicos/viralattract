'use strict';

import {CoreModule} from '@jamilservices/sb-core-module';
import {canvasStruct, homeStruct} from "@components/render/struct/main.js";
import {NotifyModule} from '@jamilservices/sb-module-notify';

const storeEvents = NotifyModule.instance("page-store");

const pages = {
    "home": homeStruct
};

const renderSection = (section) => {
    const parent = CoreModule.getElementFromStore("main.canvas");
    /**
     * @type {HTMLElement}
     */
    const viewMain = CoreModule.getElementFromStore("view.main");
    if(viewMain) {
        /**
         * remove elements and events recursively
         */
        CoreModule.removeElement(viewMain);
    }
    if (parent && pages[section]) {
        CoreModule.createFromStruct({
            parent,
            struct: pages[section]
        });
    }
};
const renderCanvas = (section = {}) => {
    CoreModule.createFromStruct({
        parent: window.document.body,
        struct: canvasStruct
    });
    renderSection(section);
};
const renderPage = (section) => {
    /**
     * @type {HTMLElement}
     */
    const parent = CoreModule.getElementFromStore("main.canvas");
    if (parent) {
        renderSection(section);
    } else renderCanvas(section);
};
storeEvents.subscribe({
    id: "render-watch",
    fn: data => {
        const {origin, render} = data;
        if (origin === "page-store") renderPage(render);
    }
});

export default Object.freeze({});