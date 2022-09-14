// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";
import allDevices from "../../data/all-devices.json";
import deviceTypes from "../../data/device-types.json";
import largestDevices from "../../data/largest-devices.json";
import oneDevices from "../../data/oneDevices.json";

type Data = {
    name: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const getInterfaces = () => {
        const fff = allDevices.map((device) => {
            // return Object.keys(device).map((key) => {
            // delete device.notes;
            // delete device.weight;
            // delete device.additional_specifications;

            // if (device[key] === "") {
            //     delete device[key];
            // }

            // const makers = device.maker.map((mak) => {
            //     return mak.title;
            // });

            // device["manufacturers"] = makers;

            // const functions = device.functions.map((fun) => {
            //     return fun.function;
            // });
            // device["deviceTypes"] = functions;

            delete device.functions;
            delete device.maker;

            return device;
            // });
        });

        var merged = [].concat.apply([], fff);
        // const merge = (...fff[0]).concat(...fff[1])

        console.log(fff[0].length);
        // console.log(fff[1]);

        // console.log(merged);

        const nonAsciiJson = JSON.stringify(fff[0], null, 4).replace(
            /[\u007F-\uFFFF]/g,
            function (chr) {
                return (
                    "\\u" + ("0000" + chr.charCodeAt(0).toString(16)).substr(-4)
                );
            }
        );

        fs.writeFileSync("./data/purge2.json", JSON.stringify(fff, null, 4));
    };
    // getInterfaces();

    const getOneDeviceOfEachType = () => {
        const dev = largestDevices.map((dev) => {
            return allDevices.find((device) => device.slug === dev.slug);
        });

        fs.writeFileSync(
            "./data/largestDevices/oneDevices.json",
            JSON.stringify(dev, null, 4)
        );
    };

    // getOneDeviceOfEachType();

    const separateDevices = () => {
        oneDevices.map((device) => {
            fs.writeFileSync(
                `./data/largestDevices/${device.deviceTypes[0]
                    .split(" ")
                    .join("")
                    .split("/")
                    .join("")}.json`,
                JSON.stringify(device, null, 4)
            );
        });
    };

    separateDevices();

    res.status(200).json({ name: "John Doe" });
}
