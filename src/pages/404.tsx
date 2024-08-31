import Image from "next/image";


const Custom404 = ()=>{
    return(
        <div className="w-screen h-screen text-[#6C63FF] flex items-center justify-center flex-col space-y-5">
            {/* <img className="w-1/2" src="/not_found.png" alt="404" /> */}
            <Image src={"/not_found.png"} alt={"404"} width={600} height={600} className="w-1/2" />
            <h1>Halaman Tidak Ditemukan</h1>
        </div>
    )
}

export default Custom404;