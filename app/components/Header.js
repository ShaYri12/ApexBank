import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  ShoppingCart,
  Users2,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="sticky top-0 left-[300px] z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            >
              <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 text-foreground"
            >
              <ShoppingCart className="h-5 w-5" />
              Orders
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Package className="h-5 w-5" />
              Products
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Users2 className="h-5 w-5" />
              Customers
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <LineChart className="h-5 w-5" />
              Settings
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      {/*Head profile */}
      <div className="flex w-full justify-between">
        <div className="flex gap-[16px]">
          <Avatar className="w-[74px] h-[74px]">
            <AvatarImage src="/assets/profile.jpg" />
            <AvatarFallback>Profile</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="text-textColor text-[30px] leading[38px] font-[600]">
              Demi Wilkinson
            </h4>
            <p className="text-[#475467] flex items-center gap-[8px] text-[14px] leading[20px] font-[500]">
              Seja bem vinda, Demi!
              <span className="flex text-[#667085] gap-[6px] rounded-[6px] px-[4px] py-[2px] border border-[#D0D5DD]">
                <img src="/assets/dot.svg" alt="dot" />
                Conta selecionada: Matriz
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="flex gap-[8px] w-max text-[14px] text-[#344054] font-[500] leading[20px]"
            >
              <img
                width={"24px"}
                height={"24px"}
                src="/assets/BR.svg"
                alt="lang"
              />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-white shadow-sm px-[8px] h-8 py-[14px] rounded-[8px]"
                >
                  <img
                    width={"20px"}
                    height={"20px"}
                    src="/assets/bell.svg"
                    alt="bell"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Notification - 1</DropdownMenuItem>
                <DropdownMenuItem>Notification - 2</DropdownMenuItem>
                <DropdownMenuItem>Notification - 3</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="flex shadow-sm bg-white gap-[8px] px-[8px] py-[14px] rounded-[8px] w-max h-8 text-[14px] text-[#344054] font-[500] leading[20px]"
                >
                  <img
                    width={"20px"}
                    height={"20px"}
                    src="/assets/wallet.svg"
                    alt="wallet"
                  />
                  <span className="text-[14px] text-[#344054] font-[500] leading[20px]">
                    Ag. 0002 • Cc. 50551-1
                  </span>
                  <img
                    width={"20px"}
                    height={"20px"}
                    src="/assets/copy.svg"
                    alt="copy"
                  />
                  <img
                    width={"20px"}
                    height={"20px"}
                    src="/assets/dropdown.svg"
                    alt="dropdown"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                <DropdownMenuItem>Change Password</DropdownMenuItem>
                <DropdownMenuItem>Privacy Settings</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
          </div>
          <div className="flex gap-[8px] ms-auto">
            <img
            width={"11.11px"}
            height={"10px"}
            src="/assets/reload.svg"
            alt="reload"
            />
            <p className="text-[14px] text-[#98A2B3] font-[400] leading[20px]">Última atualização: 10/09/2023 ás 13:45</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;