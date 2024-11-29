

export function ProjectCard({ image, url, projTitle }: { image: string, url: string, projTitle: string }) {
    return (

        <div className="relative max-w-fit mx-auto border-rose-400 rounded-lg border-2">
            <img className="w-full max-w-sm mx-auto h-auto relative z-0 rounded-lg" title="test" src={image}></img>
            <div className="absolute w-full h-full bottom-0 left-0 ">
                <a className=" transition-opacity opacity-0 duration-300 bg-black hover:opacity-100 " href={url}>
                    <h2 className="text-white text-3xl font-bold absolute inset-0 flex items-center justify-center opacity-100 bg-black/25">{projTitle}</h2>
                </a>


            </div >
        </div >

    )
}
