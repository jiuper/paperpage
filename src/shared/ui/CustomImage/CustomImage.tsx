import { useState } from "react";
import type { ImageProps } from "next/image";
import Image from "next/image";

import NotF0undImg from "@/shared/assests/notFound.png";

type CustomImageProps = ImageProps;
export const CustomImage = ({ ...props }: CustomImageProps) => {
    const { src, alt, className, onClick, width, height } = props;
    const [err, setErr] = useState(false);

    return (
        <Image
            width={width}
            height={height}
            className={className}
            src={!err ? src : NotF0undImg}
            alt={alt}
            onClick={onClick}
            onError={() => setErr(true)}
        />
    );
};
