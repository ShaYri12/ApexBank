import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Investments = () => {
  return (
    <Card className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-md">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="text-left">Investimentos</CardTitle>
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
      <CardContent className="flex flex-col lg:flex-row">
        <div className="flex-1 flex flex-col items-center lg:items-start lg:flex-row lg:space-x-4">
          <div className="w-24 h-24 mb-4 lg:mb-0">
            <img src="/assets/pie-chart.svg" alt="Donut Chart" className="w-full h-full" />
          </div>
          <div>
            <CardDescription className="text-zinc-500 dark:text-zinc-400">Balanço total</CardDescription>
            <CardTitle className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">R$ 148,40</CardTitle>
            <div className="flex items-center mt-2">
              <span className="text-green-500 dark:text-green-400">↑ 7.2%</span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img src="/assets/line-bar-chart.svg" alt="Line Chart" className="w-full h-full" />
        </div>
      </CardContent>
      <CardContent className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="flex flex-col items-center">
          <span className="text-zinc-500 dark:text-zinc-400">Renda Fixa</span>
          <span className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">R$ 00,00</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-zinc-500 dark:text-zinc-400">Ações</span>
          <span className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">R$ 00,00</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-zinc-500 dark:text-zinc-400">Fundos imobiliários</span>
          <span className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">R$ 00,00</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-zinc-500 dark:text-zinc-400">Cripto</span>
          <span className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">R$ 00,00</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-zinc-500 dark:text-zinc-400">Fundos de investimentos</span>
          <span className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">R$ 00,00</span>
        </div>
      </CardContent>
      <CardContent className="mt-4 text-right">
        <a href="#" className="text-blue-500 dark:text-blue-400">Ver todas as carteiras</a>
      </CardContent>
    </Card>
  );
};

export default Investments;
