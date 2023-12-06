import Image from "next/image";

export function Logo() {
    return (
        <>
            <Image
                className=''
                src={'/svgs/OrthoCare-Logotype.svg'}
                width={200}
                height={200}
                alt='OrthoCare Logo'
            />
        </>
    )
}