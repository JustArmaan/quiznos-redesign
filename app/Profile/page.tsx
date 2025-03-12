"use client";
import {
    Clock,
    Globe,
    HelpCircle,
    Info,
    LogOut,
    User,
    UserPlus,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Profile() {
    const [language, setLanguage] = useState("en");
    const [userData, setUserData] = useState({
        name: "Armaan Singh",
        phone: "+778-123-456",
        email: "armaan@quiznos.com",
    });

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "fr" : "en");
    };

    const menuItems = [
        {
            icon: <Clock className="w-5 h-5 text-black" />,
            text:
                language === "en" ? "Account History" : "Historique du Compte",
        },
        {
            icon: <UserPlus className="w-5 h-5 text-black" />,
            text: language === "en" ? "Invite Friends" : "Inviter des Amis",
        },
        {
            icon: <HelpCircle className="w-5 h-5 text-black" />,
            text: language === "en" ? "Need Help" : "Besoin d'Aide",
        },
        {
            icon: <Info className="w-5 h-5 text-black" />,
            text: language === "en" ? "About" : "À Propos",
        },
        {
            icon: <LogOut className="w-5 h-5 text-black" />,
            text: language === "en" ? "Logout" : "Déconnexion",
        },
    ];

    return (
        <div className=" bg-[#AFFF00]">
            <div className="max-w-md mx-auto bg-white shadow-md overflow-hidden">
                <div className="p-3 text-center bg-[#E85D0C] text-white">
                    <div className="flex justify-end mb-3">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center bg-white text-[#E85D0C] px-3 rounded-full text-sm"
                        >
                            <Globe className="w-4 h-4 mr-1" />
                            {language === "en" ? "FR" : "EN"}
                        </button>
                    </div>
                    <Image
                        src="/profile.png"
                        alt="Profile"
                        width={100}
                        height={100}
                        className="rounded-full mx-auto mb-2 border-4 border-white w-[100px] h-[100px] object-cover"
                    />
                    <h2 className="text-lg font-bold">{userData.name}</h2>
                </div>

                <div className="p-4 space-y-2">
                    <div>
                        <label className="block text-gray-700 font-bold text-sm mb-2">
                            {language === "en"
                                ? "Phone Number"
                                : "Numéro de Téléphone"}
                        </label>
                        <div className="flex items-center">
                            <User className="w-5 h-5 mr-3 text-gray-500" />
                            <p className="text-black text-sm">
                                {userData.phone}
                            </p>
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold text-sm mb-1">
                            {language === "en"
                                ? "Email"
                                : "Courrier Électronique"}
                        </label>
                        <div className="flex items-center">
                            <User className="w-5 h-5 mr-3 text-gray-500" />
                            <p className="text-black text-sm">
                                {userData.email}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 space-y-2">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer"
                        >
                            {item.icon}
                            <span className="ml-4 text-sm text-gray-700">
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
