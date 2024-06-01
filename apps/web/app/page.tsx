"use client";
import { Button } from "@repo/ui/components/ui/button";
import { Label } from "@repo/ui/components/custom/label";
import { useName, useBalance } from "@repo/store/hooks";

export default function Page() {
  const name = useName();
  const balance = useBalance();
  return (
    <main className="absolute top-0 left-0 w-full h-full grid place-items-center">
      <h1 className="text-4xl font-bold">
        {name} : {balance}
      </h1>
      <Label />
      <Button>Click me</Button>
    </main>
  );
}
