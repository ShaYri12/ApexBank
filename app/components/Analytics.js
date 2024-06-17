import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FaArrowDown, FaArrowUp, FaChevronRight } from "react-icons/fa";

const Analytics = () => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 lg:col-span-2">
      <Card className="flex-grow w-full md:w-auto flex flex-col rounded-[16px] p-[24px] gap-[32px] bg-white border border-[#EAECF0]">
        <CardHeader className="flex  justify-between items-left p-0">
          <CardTitle className="flex flex-col gap-[18px] text-[16px] text-[#8D7F6D] font-[500] leading-[24px]">
            <span className="flex gap-[8px]">
              Saldo total
              <img
                width={"20px"}
                height={"20px"}
                src="/assets/eye.svg"
                className="text-[#8D7F6D]"
                alt="Eye"
              />
            </span>
            <span className="hidden md:block text-textColor text-[30px] text-[#8D7F6D] font-[600] leading-[38px]">
              R$ 00,00
            </span>
            <div className="md:hidden">
              <div className="flex justify-between">
                <span className=" text-textColor text-[24px] font-[600] leading-[38px]">
                  R$ 1,843.82
                </span>
                <div
                  className="rounded-full px-4 flex items-center bg-[#ECFDF3]
 border-[#ABEFC6] border text-[#067647] gap-1 text-[14px]"
                >
                  <FaArrowUp className="text-[#17B26A]" />
                  7.2%
                </div>
              </div>
              <div className="flex justify-between pt-6">
                <div
                  className="rounded-full px-4 flex items-center bg-[#F7F8F9]
 border-[#EAECF0] border text-textColor gap-1 text-[14px]"
                >
                  8 contas
                </div>
                <button className="text-[#9199B1] flex gap-[5px] items-center justify-center">
                  Ver todas{" "}
                  <div className="text-[#4E5A7B] p-[5px]  rounded-[16px] border border-[#DFE4F1]">
                    <FaChevronRight className="w-[12px] h-[12px]" />
                  </div>
                </button>
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="hidden md:flex flex-col p-0 gap-[32px]">
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

      <div className="grid grid-cols-2 md:flex flex-col w-full md:max-w-[392px] gap-[16px]">
        <Card className="bg-white rounded-[12px] border-[#EAECF0] p-[16px] md:p-[24px]">
          <CardContent className="flex flex-col p-0 md:gap-[24px]">
            <CardDescription className="text-[#8D7F6D] text-[14px] md:text-[16px] font-[500] leading-[24px]">
              Entradas do mês
            </CardDescription>
            <div className="flex items-center gap-[16px]">
              <div className="flex flex-col gap-[16px]">
                <CardTitle className="hidden md:block text-textColor text-[24px] font-[600] leading-[32px]">
                  R$ 00.00
                </CardTitle>
                <CardTitle className="md:hidden text-textColor text-[20px] font-[600] leading-[32px]">
                  R$ 91.42
                </CardTitle>
                <div className="flex gap-[8px]">
                  <div className="flex gap-[2px]">
                    <FaArrowUp className="text-[#17B26A]" />
                    <span className="text-[#067647] text-[14px] font-[500] leading-[20px]">
                      00%
                    </span>
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
                className="hidden md:block"
              />
            </div>
            <CardContent className="hidden md:flex flex-col p-0">
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

        <Card className="bg-white rounded-[12px] border-[#EAECF0] p-[16px] md:p-[24px]">
          <CardContent className="flex flex-col p-0  md:gap-[24px]">
            <CardDescription className="text-[#8D7F6D] text-[14px] md:text-[16px] font-[500] leading-[24px]">
              Saídas do mês
            </CardDescription>
            <div className="flex items-center gap-[16px]">
              <div className="flex flex-col gap-[16px]">
                <CardTitle className="hidden md:block text-textColor text-[24px] font-[600] leading-[32px]">
                  R$ 00.00
                </CardTitle>
                <CardTitle className="md:hidden text-textColor text-[20px] font-[600] leading-[32px]">
                  R$ 32.42
                </CardTitle>
                <div className="flex gap-[8px]">
                  <div className="flex gap-[2px]">
                    <FaArrowDown className="text-[#F04438]" />
                    <span className="text-[#F04438] md:text-[#067647] text-[14px] font-[500] leading-[20px]">
                      00%
                    </span>
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
                className="hidden md:block"
              />
            </div>
            <CardContent className="hidden md:flex flex-col p-0">
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
  );
};

export default Analytics;
