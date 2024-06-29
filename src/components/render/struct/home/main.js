'use strict';

const maintenanceImg = {
    element: "img",
    attr: {
        src: "./assets/alien-loading.png"
    }
};

const maintenanceText = {
    element: "h2",
    text: "website under maintenance"
};

const struct = {
    element: "section",
    dataset: {
        state: "view.main"
    },
    children: [
        maintenanceImg,
        maintenanceText
    ]
};

export const homeStruct = Object.freeze(struct);