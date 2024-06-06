'use strict';

const mainText = {
    element: "img",
    attr: {
        src: "./assets/alien-loading.png"
    }
};

const helloWordExample = [
    mainText,
    {
        element: "h4",
        text: "website under maintenance"
    }
];

export const comeSoonPage = Object.freeze(helloWordExample);
