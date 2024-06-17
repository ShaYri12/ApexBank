import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Investments = () => {
  return (
    <Card className="flex flex-col gap-[24px] rounded-[12px] bg-white shadow-sm">
      <CardHeader className="flex flex-row gap-[8px] justify-between items-center py-[20px] px-[24px] ">
        <CardTitle className="text-[16px] leading-[24px] text-[#8D7F6D] font-[600]">
          Investimentos
        </CardTitle>
        <Button
          variant="ghost"
          size="icon"
          className="bg-white rounded-full border border-dotted border-[#D0D5DD]"
        >
          <img
            width={"16px"}
            height={"16px"}
            src="/assets/plus.svg"
            alt="plus"
          />
        </Button>
      </CardHeader>
      <div className="flex flex-col gap-[24px] p-[24px]">
        <CardContent className="flex flex-col gap-[24px] lg:flex-row">
          <div className="flex-1 flex flex-shrink flex-col gap-[24px] items-center lg:items-start lg:flex-row">
            <div className="w-[133px] h-[133px] mb-4 lg:mb-0">
              <img
                src="/assets/pie-chart.svg"
                alt="Donut Chart"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-[24px]">
              <span className="flex flex-col gap-[8px]">
                <CardDescription className="text-[14px] text-[#475467] leading-[20px] font-[500]">
                  Balanço total
                </CardDescription>
                <CardTitle className="text-[30px] text-[#101828] leading-[38px] font-[600]">
                  R$ 148,40
                </CardTitle>
              </span>
              <Badge className="bg-[#ECFDF3] border border-[#ABEFC6] hover-bg-[#ECFDF3] w-fit text-[#067647] border-dotted">
                <img
                  width={"12px"}
                  height={"12px"}
                  src="/assets/arrow-up-green.svg"
                  alt="trend-up"
                />{" "}
                9.2%
              </Badge>
            </div>
          </div>
          <div className="flex-1 w-full">
            <img
              src="/assets/line-bar-chart.svg"
              alt="Line Chart"
              className="w-full h-full"
            />
          </div>
        </CardContent>
        <CardContent className="p-[24px] gap-[24px] border border-[#EAECF0] shadow-xs grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="flex flex-col gap-[32px] items-center">
          <div className="flex gap-[8px] items-start">
          <img className="pt-[5px]" src="/assets/dot-blue.svg" alt="dot" />
              <div className="flex flex-col gap-[4px]">
              <span className="text-[14px] text-[#475467] leading-[20px] font-[500]">
                Renda Fixa
              </span>
              <span className="text-[18px] text-[#101828] leading-[28px] font-[600]">
              R$ 00,00
            </span>
            </div>
            </div>
          </div>
          <div className="flex flex-col gap-[32px] items-center">
          <div className="flex gap-[8px] items-start">
          <img className="pt-[5px]" src="/assets/dot-blue.svg" alt="dot" />
              <div className="flex flex-col gap-[4px]">
              <span className="text-[14px] text-[#475467] leading-[20px] font-[500]">
                Renda Fixa
              </span>
              <span className="text-[18px] text-[#101828] leading-[28px] font-[600]">
              R$ 00,00
            </span>
            </div>
            </div>
          </div>
          <div className="flex flex-col gap-[32px] items-center">
          <div className="flex gap-[8px] items-start">
          <img className="pt-[5px]" src="/assets/dot-blue.svg" alt="dot" />
              <div className="flex flex-col gap-[4px]">
              <span className="text-[14px] text-[#475467] leading-[20px] font-[500]">
                Renda Fixa
              </span>
              <span className="text-[18px] text-[#101828] leading-[28px] font-[600]">
              R$ 00,00
            </span>
            </div>
            </div>
          </div>
          <div className="flex flex-col gap-[32px] items-center">
          <div className="flex gap-[8px] items-start">
          <img className="pt-[5px]" src="/assets/dot-blue.svg" alt="dot" />
              <div className="flex flex-col gap-[4px]">
              <span className="text-[14px] text-[#475467] leading-[20px] font-[500]">
                Renda Fixa
              </span>
              <span className="text-[18px] text-[#101828] leading-[28px] font-[600]">
              R$ 00,00
            </span>
            </div>
            </div>
          </div>
          <div className="flex flex-col gap-[32px] items-end">
            <div className="flex gap-[8px] items-start">
              <img className="pt-[5px]" src="/assets/dot-blue.svg" alt="dot" />
              <div className="flex flex-col gap-[4px]">
              <span className="text-[14px] text-[#475467] leading-[20px] font-[500]">
                Renda Fixa
              </span>
              <span className="text-[18px] text-[#101828] leading-[28px] font-[600]">
              R$ 00,00
            </span>
            </div>
            </div>
          </div>
        </CardContent>
        <CardContent className="mt-4 text-right">
          <a href="#" className="text-blue-500 dark:text-blue-400">
            Ver todas as carteiras
          </a>
        </CardContent>
      </div>
    </Card>
  );
};

export default Investments;
