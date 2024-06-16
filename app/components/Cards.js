import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
  } from "@/components/ui/card";
  
const Cards = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="flex items-start gap-[12px] px-[16px] py-[20px] border border-[#EAECF0] bg-white shadow-sm">
        <div className="flex items-center justify-center p-[24px] rounded-full shadow border border-[#EAECF0]">
          <img
            width={"24px"}
            height={"24px"}
            className="absolute"
            src="/assets/receber.svg"
            alt="Receber"
          />
        </div>
        <CardContent className="p-0 flex flex-col gap-[6px]">
          <CardTitle className="text-textColor font-[600] text-[16px] leading-[24px]">
            Receber
          </CardTitle>
          <CardDescription className="text-[#D0D5DD] text-[12px] font-[400] leading-[18px]">
            Pix (Depósito, Cobrança e Chave); Emitir boletos; Receber TED
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="flex items-start gap-[12px] px-[16px] py-[20px] border border-[#EAECF0] bg-white shadow-sm">
        <div className="flex items-center justify-center p-[24px] rounded-full shadow border border-[#EAECF0]">
          <img
            width={"24px"}
            height={"24px"}
            className="absolute"
            src="/assets/pagar.svg"
            alt="Pagar"
          />
        </div>
        <CardContent className="p-0 flex flex-col gap-[6px]">
          <CardTitle className="text-textColor font-[600] text-[16px] leading-[24px]">
            Pagar
          </CardTitle>
          <CardDescription className="text-[#D0D5DD] text-[12px] font-[400] leading-[18px]">
            Pix (Pagar, Transferência); TED/DOC; Pagar boleto/conta; Câmbio
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="flex items-start gap-[12px] px-[16px] py-[20px] border border-[#EAECF0] bg-white shadow-sm">
        <div className="flex items-center justify-center p-[24px] rounded-full shadow border border-[#EAECF0]">
          <img
            width={"24px"}
            height={"24px"}
            className="absolute"
            src="/assets/investir2.svg"
            alt="Investir"
          />
        </div>
        <CardContent className="p-0 flex flex-col gap-[6px]">
          <CardTitle className="text-textColor font-[600] text-[16px] leading-[24px]">
            Investir
          </CardTitle>
          <CardDescription className="text-[#D0D5DD] text-[12px] font-[400] leading-[18px]">
            Ações, Títulos, Imóveis e Fundos
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="flex items-start gap-[12px] px-[16px] py-[20px] border border-[#EAECF0] bg-white shadow-sm">
        <div className="flex items-center justify-center p-[24px] rounded-full shadow border border-[#EAECF0]">
          <img
            width={"24px"}
            height={"24px"}
            className="absolute"
            src="/assets/comprar2.svg"
            alt="Comprar"
          />
        </div>
        <CardContent className="p-0 flex flex-col gap-[6px]">
          <CardTitle className="text-textColor font-[600] text-[16px] leading-[24px]">
            Comprar
          </CardTitle>
          <CardDescription className="text-[#D0D5DD] text-[12px] font-[400] leading-[18px]">
            Em breve novidades para compra de criptomoedas
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cards;
