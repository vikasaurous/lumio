import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { BlueTitle } from "./reusables";
import { PricingTable } from "@clerk/nextjs";
import { DrawerRoot } from "@base-ui/react";

interface PricingModalProps {
  children: React.ReactNode;
  readonly reason?: "credits" | "upgrade";
}

const PricingModal = ({ children, reason = "upgrade" }: PricingModalProps) => {
  const title =
    reason === "credits" ? "You're out of credits" : "Upgrade your plan";
  const description =
    reason === "credits"
      ? "You've used all your credits. Upgrade to keep building."
      : "Choose a plan that fits how you build.";
  return (
    <Dialog>
      <DialogTrigger className={"cursor-pointer"}>{children}</DialogTrigger>
      <DialogContent
        className={
          "border-white/8 bg-[#0f0f0f] p-0 text-white sm:max-w-6xl max-h-[90dvh] overflow-y-auto"
        }
      >
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle
            className={"font-serif text-xl tracking-tight text-white/90"}
          >
            <BlueTitle className="text-4xl">{title}</BlueTitle>
          </DialogTitle>
          <DialogDescription className={"text-sm text-white/35"}>
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="pb-6 px-6">
          <PricingTable
            checkoutProps={{
              appearance: {
                elements: {
                  drawerRoot: {
                    zIndex: 2000,
                  },
                },
              },
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PricingModal;
