"use client";

import NavLinks from "./navbar/NavLinks";
import ROUTES from "@/constants/route";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const LeftSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border shadow-light-300 sticky top-0 left-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 max-sm:hidden lg:w-[266px] dark:shadow-none">
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks />
      </div>
      <div className="flex flex-col gap-3">
        <Link href={ROUTES.SIGN_IN}>
          <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
            <Image src="/icons/account.svg" alt="Account" width={20} height={20} className="invert-colors lg:hidden" />
            <span className="primary-text-gradient max-lg:hidden">Log in</span>
          </Button>
        </Link>

        <Link href={ROUTES.SIGN_UP}>
          <Button className="small-medium btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
            <Image src="/icons/sign-up.svg" alt="Account" width={20} height={20} className="invert-colors lg:hidden" />
            <span className="max-lg:hidden">Sign up</span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default LeftSidebar;
