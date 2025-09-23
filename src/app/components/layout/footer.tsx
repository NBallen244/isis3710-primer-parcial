
"use client";
import { useTranslations } from "next-intl";

const Footer = ()=>{
    const t=useTranslations("Footer")
    return (
        <footer>
            <div className="bg-[#11463B] w-screen py-5 flex justify-center gap-200 absolute inset-x-0 bottom-0">
                <p className="text-white text-sm">C. 2025-PokeApp. {t("rights")}</p>
                <p className="text-white text-sm">{t("develop")} ISIS-3710</p>
            </div>
        </footer>
    );
};

export default Footer;