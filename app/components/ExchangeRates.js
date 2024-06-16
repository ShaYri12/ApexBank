import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExchangeRates = () => {
  return (
    <div className="flex flex-col md:flex-row bg-customGradient text-white rounded-[24px] shadow overflow-hidden">
      <Card className="px-[48px] py-[32px] gap-[25px] flex flex-col flex-grow bg-customGradient border-none rounded-none">
        <CardContent className="flex flex-col gap-[20px] p-0">
          <CardHeader className="flex flex-col gap-[8px] p-0">
            <CardTitle className="text-[30px] text-white leading-[38px] font-[600] mb-2 p-0">
              Faça câmbio agora na Apex Bank
            </CardTitle>
            <CardDescription className="text-[16px] text-white leading-[24px] font-[400] p-0">
              Nós temos as soluções para simplificar a sua forma de fazer
              câmbio.
            </CardDescription>
          </CardHeader>
          <div className="flex flex-col gap-[12px]">
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
            </div>
          </div>
        </CardContent>
        <CardDescription className="text-white text-[12px] leading-[18px] font-[400]">
          *Valor de câmbio oficial sem considerar taxas e volumes financeiros.
          Fale com nossa equipe
        </CardDescription>
      </Card>
      <div className="w-[391px]">
        <img
          src="/assets/exchange.jpg"
          alt="Sailing image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ExchangeRates;
