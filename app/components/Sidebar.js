'use client'
import Link from "next/link";
import React, { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("Dashboard");

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <aside className="fixed inset-y-0 overflow-y-auto left-0 w-[312px] justify-between z-10 hidden w-14 flex-col border-r bg-[#FFFFFF] sm:flex">
      <div className="flex flex-col pt-[32px] text-[16px] gap-[24px]">
        <div className="nav-brand px-[24px]">
          <img src="/assets/logo.svg" alt="Logo" />
        </div>
        <div className="relative flex-1 px-[24px] md:grow-0 pt-[10px]  pb-[10px] pr[14px]">
          <img
            className="absolute pl-[16.5px] top-[35%]"
            src="/assets/search.svg"
            alt="Logo"
          />
          <Input
            type="search"
            placeholder="Pesquisar contato"
            className="w-full rounded-lg bg-background pl-[46px] "
          />
        </div>
        <nav className="grid items-start px-2 gap-[20px] font-[600] text-textColor text-[16px] lg:px-[16px]">
          <div className="p-[12px]">
            <Link
              href="#"
              className="flex text-[#8D7F6D] font-[400] items-center gap-[12px] rounded-lg transition-all hover:text-primary"
            >
              <img
                width={"18px"}
                height={"18px"}
                src="/assets/menu.svg"
                alt="Menu"
              />
              Recuar menu
            </Link>
          </div>
          <hr />
          <div className="flex flex-col gap-[8px]">
            <Link
              href="#"
              onClick={() => handleLinkClick("Dashboard")}
              className={`flex items-center gap-[12px] p-[12px] rounded-lg transition-all ${
                activeLink === "Dashboard"
                  ? "bg-muted text-[#8D7F6D] bg-[#F7F5F0]"
                  : "text-[#8D7F6D] hover:text-primary"
              }`}
            >
              <img
                width={"18px"}
                height={"18px"}
                src="/assets/dashboard.svg"
                alt="Dashboard"
              />
              Dashboard
            </Link>
            <Link
              href="#"
              onClick={() => handleLinkClick("Receber")}
              className={`flex items-center p-[12px] gap-[12px] rounded-lg transition-all ${
                activeLink === "Receber"
                  ? "bg-muted text-[#8D7F6D] bg-[#F7F5F0]"
                  : "text-[#8D7F6D] hover:text-primary"
              }`}
            >
              <img
                width={"18px"}
                height={"18px"}
                src="/assets/receber.svg"
                alt="Receber"
              />
              Receber
            </Link>
            <Link
              href="#"
              onClick={() => handleLinkClick("Pagar")}
              className={`flex items-center p-[12px] gap-[12px] rounded-lg transition-all ${
                activeLink === "Pagar"
                  ? "bg-muted text-[#8D7F6D] bg-[#F7F5F0]"
                  : "text-[#8D7F6D] hover:text-primary"
              }`}
            >
              <img
                width={"18px"}
                height={"18px"}
                src="/assets/pagar.svg"
                alt="Pagar"
              />
              Pagar
            </Link>
            <Link
              href="#"
              onClick={() => handleLinkClick("Extrato")}
              className={`flex items-center p-[12px] gap-[12px] rounded-lg transition-all ${
                activeLink === "Extrato"
                  ? "bg-muted text-[#8D7F6D] bg-[#F7F5F0]"
                  : "text-[#8D7F6D] hover:text-primary"
              }`}
            >
              <img
                width={"18px"}
                height={"18px"}
                src="/assets/Extrato.svg"
                alt="Extrato"
              />
              Extrato
            </Link>
            <Link
              href="#"
              onClick={() => handleLinkClick("Investir")}
              className={`flex items-center p-[12px] gap-[12px] rounded-lg transition-all ${
                activeLink === "Investir"
                  ? "bg-muted text-[#8D7F6D] bg-[#F7F5F0]"
                  : "text-[#8D7F6D] hover:text-primary"
              }`}
            >
              <img
                width={"18px"}
                height={"18px"}
                src="/assets/investir.svg"
                alt="Investir"
              />
              Investir
            </Link>
            <Link
              href="#"
              onClick={() => handleLinkClick("Comprar")}
              className={`flex items-center p-[12px] gap-[12px] rounded-lg transition-all ${
                activeLink === "Comprar"
                  ? "bg-muted text-[#8D7F6D] bg-[#F7F5F0]"
                  : "text-[#8D7F6D] hover:text-primary"
              }`}
            >
              <img
                width={"18px"}
                height={"18px"}
                src="/assets/comprar.svg"
                alt="Comprar"
              />
              Comprar
            </Link>
          </div>
        </nav>
      </div>
      <div className="flex flex-col gap-[24px]">
        <Card className="px-[16px] py-[40px] text-textColor gap-[32px] border-none text-[24px] font-[600] leading[24px]">
          <CardHeader className="gap-[16px]">
            <CardTitle>
              <img
                className="pb-[14px]"
                width={"30px"}
                src="/assets/badge.svg"
                alt="badge"
              />
              Confira os novos recursos da plataforma
            </CardTitle>
            <CardDescription className="text-[16px] font-[400]">
              Temos novas atualizações para melhorar sua experiência na conta
            </CardDescription>
          </CardHeader>
          <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
            <Button
              size="sm"
              className="w-full px-[12px] py-[20px] bg-white text-textColor hover:bg-[#ededed] rounded-[8px]"
            >
              Ver novidades
            </Button>
          </CardContent>
        </Card>

        <div className="px-[16px]">
          <Card className="bg-[#8D7F6D] px-[6px] pt-[5px] text-center text-white gap-[32px] rounded-[16px] text-[24px] font-[600] leading[24px]">
            <CardHeader className="gap-[16px]">
              <CardTitle className="">Fique totalmente conectado</CardTitle>
              <CardDescription className="text-[16px] text-white font-[500]">
                Leio o QR Code e baixe o aplicativo
              </CardDescription>
            </CardHeader>
            <CardContent className="flex gap-1 py-0">
              <Button
                size="sm"
                className="p-0 bg-transparent hover:bg-[#919191] rounded-[8px]"
              >
                <img src="/assets/apple.png" alt="Apple" />
              </Button>
              <Button
                size="sm"
                className="p-0 bg-transparent hover:bg-[#919191] rounded-[8px]"
              >
                <img src="/assets/googleplay.png" alt="Google Play" />
              </Button>
            </CardContent>
            <CardFooter className="p-0">
              <img src="/assets/mobile.svg" alt="Mobile" />
            </CardFooter>
          </Card>
        </div>

        <div className="sidebar-footer flex flex-col gap-[24px] px-[16px] pb-[32px] text-[16px] font-[600] leading[24px]">
          <div className="side-nav-end">
            <Link
              href="#"
              onClick={() => handleLinkClick("Suporte")}
              className={`flex items-center p-[12px] gap-[12px] rounded-lg transition-all ${
                activeLink === "Suporte"
                  ? "bg-muted text-[#8D7F6D] bg-[#F7F5F0]"
                  : "text-[#8D7F6D] hover:text-primary"
              }`}
            >
              <img
                width={"18px"}
                height={"18px"}
                src="/assets/suporte.svg"
                alt="Suporte"
              />
              Suporte
            </Link>
            <Link
              href="#"
              onClick={() => handleLinkClick("Configurações")}
              className={`flex items-center p-[12px] gap-[12px] rounded-lg transition-all ${
                activeLink === "Configurações"
                  ? "bg-muted text-[#8D7F6D] bg-[#F7F5F0]"
                  : "text-[#8D7F6D] hover:text-primary"
              }`}
            >
              <img
                width={"18px"}
                height={"18px"}
                src="/assets/setting.svg"
                alt="Configurações"
              />
              Configurações
            </Link>
          </div>
          <hr />
          <div className="flex gap-[25px] p-[12px] text-textColor text-[14px] font-[600] leading[24px]">
            <div className="flex gap-[12px]">
            <Avatar className="w-[40px] h-[40px]">
              <AvatarImage src="/assets/profile.jpg" />
              <AvatarFallback>Profile</AvatarFallback>
            </Avatar>
              <span>
                <h3>Olivia Rhye</h3>
                <p className="text-[#8D7F6D]">olivia@untitledui.com</p>
              </span>
            </div>
            <img
              className="cursor-pointer"
              width={"18px"}
              height={"18px"}
              src="/assets/exit.svg"
              alt="Exit"
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
