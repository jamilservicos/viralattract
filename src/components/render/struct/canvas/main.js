'use strict';

const headerStruct = {
    element: "header",
    children: [

    ]
};

const contentStruct = {
    element: "main",
    dataset: {
        state: "main.canvas"
    }
};
const footerStruct = {
    element: "footer",
    text: "created by SimplyBuilder"
};
const struct = {
    element: "section",
    attr: {
        class: "canvas-container"
    },
    children: [
        headerStruct,
        contentStruct,
        footerStruct
    ]
};

export const canvasStruct = Object.freeze(struct);