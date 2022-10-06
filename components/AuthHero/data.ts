import rytm from "../../public/assets/images/rytm_sketch.png";
import synth from "../../public/assets/images/synth_sketch.png";
import deck from "../../public/assets/images/deck_sketch.png";
import headphones from "../../public/assets/images/headphones_sketch.png";
import interfaceSketch from "../../public/assets/images/interface_sketch.png";
import mixer from "../../public/assets/images/mixer_sketch.png";
import speakers from "../../public/assets/images/speakers_sketch.png";

// TODO Optimise images

export const Components = [
    {
        type: "sketchImage",
        data: {
            name: "speakers",
            image: speakers,
            width: "w-16",
            top: "-top-16",
        },
    },
    {
        type: "sketchImage",
        data: { name: "rytm", image: rytm, width: "w-28" },
    },
    {
        type: "sketchImage",
        data: { name: "synth", image: synth, width: "w-36" },
    },
    {
        type: "sketchImage",
        data: { name: "deck", image: deck, width: "w-36" },
    },
    {
        type: "sketchImage",
        data: { name: "headphones", image: headphones, width: "w-16" },
    },
    {
        type: "sketchImage",
        data: {
            name: "interfaceSketch",
            image: interfaceSketch,
            width: "w-24",
        },
    },
    {
        type: "sketchImage",
        data: { name: "mixer", image: mixer, width: "w-28" },
    },
    {
        type: "sketchImage",
        data: {
            name: "speakers",
            image: speakers,
            width: "w-16",
            top: "-top-16",
        },
    },
];

export const rotateClasses = [
    "rotate-0",
    "rotate-1",
    "rotate-2",
    "rotate-3",
    "rotate-6",
    "rotate-12",
];
