
import Image from "next/image";
import Link from "next/link";
const Header = ()=>{
    return (
        <header>
            <div className="bg-[#E71309] w-screen py-5 flex justify-center">
                <Link href="/" className="justify-items-center">
                <Image src="/pokemon-logo.png" alt="logo" height={200} width={200}/>
                </Link>
            </div>
        </header>
    );
};

export default Header;
