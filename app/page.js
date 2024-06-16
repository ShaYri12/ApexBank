import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Dashboard = () => {
  return (
    <main className="flex flex-col px-[32px] gap-[32px]">
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

      <div className="flex items-start gap-4 md:gap-8 lg:col-span-2">
        <Card className="flex-grow flex flex-col rounded-[16px] p-[24px] gap-[32px] bg-white border border-[#EAECF0]">
          <CardHeader className="flex justify-between items-left p-0">
            <CardTitle className="flex flex-col gap-[18px] text-[16px] text-[#8D7F6D] font-[500] leading-[24px]">
              <span className="flex gap-[8px]">
                Saldo total
                <img
                  width={"20px"}
                  height={"20px"}
                  src="/assets/eye.svg"
                  alt="Eye"
                />
              </span>
              <span className="text-textColor text-[30px] text-[#8D7F6D] font-[600] leading-[38px]">
                R$ 00,00
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col p-0 gap-[32px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
              <Card className="flex flex-col px-[16px] py-[20px] gap-[20px] rounded-[12px] border border-[#EAECF0]">
                <CardContent className="flex flex-col gap-[24px] p-0">
                  <CardTitle className="flex gap-[8px] text-[#475467] text-[14px] font-[500] leading-[20px]">
                    <img
                      width={"10px"}
                      height={"10px"}
                      src="/assets/dot-blue.svg"
                      alt="dotblue"
                    />
                    <span>Conta Principal</span>
                  </CardTitle>
                  <div className="flex justify-between gap-[8px] text-[14px] font-[500] leading-[20px]">
                    <CardDescription className="gap-[8px] text-[20px] text-textColor font-[600] leading-[30px]">
                      R$ 00.00
                    </CardDescription>
                    <div className="flex items-center gap-[4px] text-[#067647]">
                      <img
                        width={"20px"}
                        height={"20px"}
                        src="/assets/trend-up.svg"
                        alt="trend-up"
                      />
                      <span>0.0%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex flex-col px-[16px] py-[20px] gap-[20px] rounded-[12px] border border-[#EAECF0]">
                <CardContent className="flex flex-col gap-[24px] p-0">
                  <CardTitle className="flex gap-[8px] text-[#475467] text-[14px] font-[500] leading-[20px]">
                    <img
                      width={"10px"}
                      height={"10px"}
                      src="/assets/dot-blue.svg"
                      alt="dotblue"
                    />
                    <span>Conta Investimento</span>
                  </CardTitle>
                  <div className="flex justify-between gap-[8px] text-[#475467] text-[14px] font-[500] leading-[20px]">
                    <CardDescription className="gap-[8px] text-[20px] text-textColor font-[600] leading-[30px]">
                      R$ 00.00
                    </CardDescription>
                    <div className="flex items-center gap-[4px] text-[#067647]">
                      <img
                        width={"20px"}
                        height={"20px"}
                        src="/assets/trend-up.svg"
                        alt="trend-up"
                      />
                      <span>0.0%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <CardTitle className="pb-[8px] text-[#8D7F6D] text-[16px] font-[600] leading-[24px]">
              Evolução do saldo
            </CardTitle>
            <Separator />
            <CardDescription className="text-center text-[#475467] text-[14px] font-[400] leading-[20px] py-12">
              Não há registros suficientes para gerar o gráfico
            </CardDescription>
            <div className="flex justify-between text-[#475467] text-[12px] font-[400] leading-[18px] px-[8px]">
              <span>Jan</span>
              <span>Mar</span>
              <span>May</span>
              <span>Jul</span>
              <span>Sep</span>
            </div>
          </CardContent>
        </Card>

        
          <div className="flex flex-col max-w-sm gap-[16px]">
            <Card className="bg-white rounded-[12px] border-[#EAECF0] p-[24px]">
              <CardContent className="flex flex-col p-0 gap-[24px]">
                <CardDescription className="text-[#8D7F6D] text-[16px] font-[500] leading-[24px]">
                  Entradas do mês
                </CardDescription>
                <div className="flex items-center gap-[16px]">
                  <div className="flex flex-col gap-[16px]">
                    <CardTitle className="text-textColor text-[24px] font-[600] leading-[32px]">
                      R$ 00.00
                    </CardTitle>
                    <div className="flex gap-[8px]">
                      <div className="flex gap-[2px]">
                        <img
                          width={"20px"}
                          height={"20px"}
                          src="/assets/arrow-up-green.svg"
                          alt="trend-up"
                        />
                        <span className="text-[#067647] text-[14px] font-[500] leading-[20px]">00%</span>
                      </div>
                      <span className="text-[#475467] text-[14px] font-[500] leading-[20px]">
                        Últ. mês
                      </span>
                    </div>
                  </div>
                  <img
                    width={"110px"}
                    height={"64px"}
                    src="/assets/chart-green.svg"
                    alt="chart"
                  />
                </div>
                <CardContent className="flex flex-col p-0">
                  <div className="flex justify-between py-3">
                    <div className="flex gap-[8px] text-[#475467] text-[14px] font-[500] leading-[20px]">
                      <img
                        width={"10px"}
                        height={"10px"}
                        src="/assets/dot-blue.svg"
                        alt="dotblue"
                      />
                      <span>Conta Principal</span>
                    </div>
                    <span className="text-[#079455] text-[14px] font-[400] leading-[20px]">
                      R$ 00.00
                    </span>
                  </div>
                  <div className="flex justify-between border-t py-3">
                    <div className="flex gap-[8px] text-[#475467] text-[14px] font-[500] leading-[20px]">
                      <img
                        width={"10px"}
                        height={"10px"}
                        src="/assets/dot-blue.svg"
                        alt="dotblue"
                      />
                      <span>Conta Investimento</span>
                    </div>
                    <span className="text-[#079455] text-[14px] font-[400] leading-[20px]">
                      R$ 00.00
                    </span>
                  </div>
                </CardContent>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-[12px] border-[#EAECF0] p-[24px]">
              <CardContent className="flex flex-col p-0 gap-[24px]">
                <CardDescription className="text-[#8D7F6D] text-[16px] font-[500] leading-[24px]">
                  Entradas do mês
                </CardDescription>
                <div className="flex items-center gap-[16px]">
                  <div className="flex flex-col gap-[16px]">
                    <CardTitle className="text-textColor text-[24px] font-[600] leading-[32px]">
                      R$ 00.00
                    </CardTitle>
                    <div className="flex gap-[8px]">
                      <div className="flex gap-[2px]">
                        <img
                          width={"20px"}
                          height={"20px"}
                          src="/assets/arrow-up-red.svg"
                          alt="trend-up"
                        />
                        <span className="text-[#067647] text-[14px] font-[500] leading-[20px]">00%</span>
                      </div>
                      <span className="text-[#475467] text-[14px] font-[500] leading-[20px]">
                        Últ. mês
                      </span>
                    </div>
                  </div>
                  <img
                    width={"110px"}
                    height={"64px"}
                    src="/assets/chart-red.svg"
                    alt="chart"
                  />
                </div>
                <CardContent className="flex flex-col p-0">
                  <div className="flex justify-between py-3">
                    <div className="flex gap-[8px] text-[#475467] text-[14px] font-[500] leading-[20px]">
                      <img
                        width={"10px"}
                        height={"10px"}
                        src="/assets/dot-blue.svg"
                        alt="dotblue"
                      />
                      <span>Conta Principal</span>
                    </div>
                    <span className="text-[#E62E05] text-[14px] font-[400] leading-[20px]">
                      R$ 00.00
                    </span>
                  </div>
                  <div className="flex justify-between border-t py-3">
                    <div className="flex gap-[8px] text-[#475467] text-[14px] font-[500] leading-[20px]">
                      <img
                        width={"10px"}
                        height={"10px"}
                        src="/assets/dot-blue.svg"
                        alt="dotblue"
                      />
                      <span>Conta Investimento</span>
                    </div>
                    <span className="text-[#E62E05] text-[14px] font-[400] leading-[20px]">
                      R$ 00.00
                    </span>
                  </div>
                </CardContent>
              </CardContent>
            </Card>
          </div>
        </div>
      
    </main>
  );
};

export default Dashboard;
