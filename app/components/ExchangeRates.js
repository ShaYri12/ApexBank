import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ExchangeRates = () => {
  return (
    <div className="flex flex-col md:flex-row bg-customGradient text-white rounded-[24px] shadow overflow-hidden">
      <Card className="md:px-[48px] p-[24px] md:py-[32px] md:gap-[25px] flex flex-col flex-grow bg-customGradient border-none rounded-none">
        <CardContent className="flex flex-col gap-[20px] p-0">
          <div>
            <img
              src="/assets/Frame 29.png"
              alt="Flags"
              className="h-[30px] w-auto sm:hidden"
            />
          </div>
          <CardHeader className="flex flex-col gap-[8px] p-0">
            <CardTitle className="text-[30px] text-white leading-[38px] font-[600] mb-2 p-0">
              Faça câmbio agora na Apex Bank
            </CardTitle>
            <CardDescription className="hidden md:block text-[16px] text-white leading-[24px] font-[400] p-0">
              Nós temos as soluções para simplificar a sua forma de fazer
              câmbio.
            </CardDescription>
            <CardDescription className="md:hidden text-[16px] text-white leading-[24px] font-[400] p-0">
              Na Apex Bank você vai encontrar especialistas prontos para te
              ajudar
            </CardDescription>
            <Button variant="outline" className="md:hidden">
              Falar com especialista
            </Button>
          </CardHeader>
          <div className="hidden md:flex flex-col gap-[12px]">
            <div className="flex gap-[10px]">
              <Card className="flex items-center justify-between text-[#28365C] rounded-[47px] bg-white p-[12px] gap-[12px] shadow-none">
                <div className="flex items-center gap-[8px]">
                  <div className="relative">
                    <img
                      width="20"
                      height="20"
                      src="/assets/BR.svg"
                      alt="BR"
                      className="relative z-0"
                    />
                    <img
                      width="20"
                      height="20"
                      src="/assets/US.svg"
                      alt="US"
                      className="absolute top-0 left-3 z-10"
                    />
                  </div>
                  <p className="ml-2 text-[#28365C] text-[16px] leading-[24px] font-[600]">
                    5.190,47 <span className="font-[400]">USD</span>
                  </p>
                </div>
                <Badge className="bg-[#ECFDF3] border border-[#ABEFC6] text-[#067647] border-dotted">
                  <img
                    width={"12px"}
                    height={"12px"}
                    src="/assets/arrow-up-green.svg"
                    alt="trend-up"
                  />{" "}
                  9.2%
                </Badge>
              </Card>
              <Card className="flex items-center justify-between text-[#28365C] rounded-[47px] bg-white p-[12px] gap-[12px] shadow-none">
                <div className="flex items-center gap-[8px]">
                  <div className="relative">
                    <img
                      width="20"
                      height="20"
                      src="/assets/BR.svg"
                      alt="BR"
                      className="relative z-0"
                    />
                    <img
                      width="20"
                      height="20"
                      src="/assets/euro.svg"
                      alt="euro"
                      className="absolute top-0 left-3 z-10"
                    />
                  </div>
                  <p className="ml-2 text-[#28365C] text-[16px] leading-[24px] font-[600]">
                    5.190,47 <span className="font-[400]">EUR</span>
                  </p>
                </div>
                <Badge className="bg-[#ECFDF3] border border-[#ABEFC6] text-[#067647] border-dotted">
                  <img
                    width={"12px"}
                    height={"12px"}
                    src="/assets/arrow-up-green.svg"
                    alt="trend-up"
                  />{" "}
                  9.2%
                </Badge>
              </Card>
            </div>
            <div className="flex gap-[10px]">
              <Card className="flex items-center justify-between text-[#28365C] rounded-[47px] bg-white p-[12px] gap-[12px] shadow-none">
                <div className="flex items-center gap-[8px]">
                  <div className="relative">
                    <img
                      width="20"
                      height="20"
                      src="/assets/BR.svg"
                      alt="BR"
                      className="relative z-0"
                    />
                    <img
                      width="20"
                      height="20"
                      src="/assets/CN.svg"
                      alt="CN"
                      className="absolute top-0 left-3 z-10"
                    />
                  </div>
                  <p className="ml-2 text-[#28365C] text-[16px] leading-[24px] font-[600]">
                    5.190,47 <span className="font-[400]">CNY</span>
                  </p>
                </div>
                <Badge className="bg-[#FEF3F2] border border-[#FECDCA] text-[#B42318] border-dotted flex items-center">
                  <img
                    className="transform rotate-180"
                    width={"12px"}
                    height={"12px"}
                    src="/assets/arrow-up-red.svg"
                    alt="trend-up"
                  />{" "}
                  9.2%
                </Badge>
              </Card>
              <Card className="flex items-center justify-between text-[#28365C] rounded-[47px] bg-white p-[12px] gap-[12px] shadow-none">
                <div className="flex items-center gap-[8px]">
                  <div className="relative">
                    <img
                      width="20"
                      height="20"
                      src="/assets/BR.svg"
                      alt="BR"
                      className="relative z-0"
                    />
                    <img
                      width="20"
                      height="20"
                      src="/assets/RU.svg"
                      alt="RU"
                      className="absolute top-0 left-3 z-10"
                    />
                  </div>
                  <p className="ml-2 text-[#28365C] text-[16px] leading-[24px] font-[600]">
                    5.190,47 <span className="font-[400]">RUB</span>
                  </p>
                </div>
                <Badge className="bg-[#ECFDF3] border border-[#ABEFC6] text-[#067647] border-dotted">
                  <img
                    width={"12px"}
                    height={"12px"}
                    src="/assets/arrow-up-green.svg"
                    alt="trend-up"
                  />{" "}
                  9.2%
                </Badge>
              </Card>
            </div>
          </div>
        </CardContent>
        <CardDescription className="hidden md:block text-white text-[12px] leading-[18px] font-[400]">
          *Valor de câmbio oficial sem considerar taxas e volumes financeiros.
          Fale com nossa equipe
        </CardDescription>
      </Card>
      <div className="w-[391px]">
        <img
          src="/assets/exchange.jpg"
          alt="Sailing image"
          className="w-full h-full object-cover hidden md:block"
        />
      </div>
    </div>
  );
};

export default ExchangeRates;
