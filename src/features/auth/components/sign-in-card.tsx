"use client"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import{Separator} from "@/components/ui/separator";
import { DottedSeparator } from "@/components/dotted-separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
  export const SignInCard = () => {
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">

      <CardHeader className="flex justify-center p-4 items-center text-center">
        <CardTitle className="text-2xl">
          Welcome back!
        </CardTitle>
      </CardHeader>

      <div className="px-7 mb-2">
        < DottedSeparator/>
      </div>

      <CardContent className="p-7">
        <form className="space-y-4">

          <Input
            required
            type="email"
            value=""
            onChange={() => {}}
            placeholder="Enter email address"
            disabled={false}
          />

          <Input
            required
            type="password"
            value=""
            onChange={() => {}}
            placeholder="Enter password here"
            disabled={false}
            min={5}
            max={20}
          />
          <Button disabled={false} type="submit"  p-2 className="w-full">
            Login
          </Button>

        </form>
      </CardContent>
          <div className="">
            <Separator />
          </div>
          <CardContent >
            <Button disabled={false} type="submit" className="w-full" variant="secondary" >
              <FcGoogle className="mr-2" size={20} /> 
              Login with Google
            </Button>
          </CardContent>

            <CardContent >
            <Button disabled={false} type="submit" className="w-full" variant="secondary" >
              <FaGithub className="mr-2" size={20} /> 
              Login with Github
            </Button>
          </CardContent>
  
    </Card>
  );
};

export default SignInCard;