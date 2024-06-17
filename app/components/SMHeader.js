import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const SMHeader = () => {
  return (
    <div className="text-center md:hidden">
      <div className="flex justify-between w-full overflow-hidden">
        <img src="/assets/logo.svg" alt="logo" className="h-[28px] w-auto" />

        <div className="flex gap-[16px]">
          <img
            src="/assets/Bell.svg"
            alt="logo"
            className="w-[24px] h-[24px]"
          />
          <img
            src="/assets/Setting.svg"
            alt="logo"
            className="w-[24px] h-[24px]"
          />
          <img
            src="/assets/Wallet.svg"
            alt="logo"
            className="w-[24px] h-[24px]"
          />
          <img
            src="/assets/Pluss.svg"
            alt="logo"
            className="w-[24px] h-[24px]"
          />
        </div>
      </div>

      <div className="flex gap-[16px] pt-[44px] ">
        <Avatar className="w-[64px] h-[64px]">
          <AvatarImage src="/assets/profile.jpg" />
          <AvatarFallback>Profile</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="text-[#8D7F6D] text-[18px] leading[28px] text-start font-[600]">
            Olá, Usuário
          </h4>
          <p className="text-[#475467] bg-white flex items-center gap-[8px] text-[14px] leading[20px] font-[500]">
            <span className="flex text-[#667085] gap-[6px] rounded-[6px] px-[4px] py-[2px] border border-[#D0D5DD]">
              <img src="/assets/dot.svg" alt="dot" />
              Conta selecionada: Conta 2
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SMHeader;
