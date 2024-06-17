import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

const Discover = () => {
  return (
    <div className="flex flex-col md:flex-row bg-customGradient2 text-white rounded-[24px] items-center p-[64px] justify-between">
      <Card className="flex flex-col flex-1 items-start md:w-1/2 bg-transparent border-none shadow-none p-0">
        <CardContent className="p-0 flex flex-col gap-[24px]">
          <CardHeader className="flex items-start p-0 gap-[24px]">
            <CardTitle className="text-[30px] text-white font-[600] leading-[38px]">
                Conheça nossas carteiras de investimentos
            </CardTitle>
          </CardHeader>
          <CardDescription className="text-[20px] text-white font-[400] leading-[30px]">
            Aprimore sua experiência em nossa plataforma
          </CardDescription>
        </CardContent>
      </Card>
      <div className="mt-6 md:mt-0 flex justify-center">
        <Button className="bg-[#8D7F6D] text-[16px] font-[600] leading-[24px] rounded-[8px] border border-[#8D7F6D] gap-[8px] px-[20px] py-[12px]"> 
            Conhecer carteiras
        </Button>
      </div>
    </div>
  )
}

export default Discover