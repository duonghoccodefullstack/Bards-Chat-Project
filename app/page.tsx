import { Button } from "@/components/ui/button";
// import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-6xl">
      helo
      <Button variant={"danger"}>Click me</Button>
      {/* <UserButton></UserButton> */}
    </div>
  );
}
