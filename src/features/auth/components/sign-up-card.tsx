"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";


import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import{Separator} from "@/components/ui/separator";
import { DottedSeparator } from "@/components/dotted-separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
  export const SignUpCard = () => {
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">

      <CardHeader className="flex flex-col justify-center p-2 items-center text-center">
        <CardTitle className="text-xl">
          Welcome back to sign up page Shilpu Darling
        </CardTitle>
        <div>
          <CardDescription className="text-xs">
            By Signing up, you agree to our {" "} 
            <Link href="/terms" className="text-blue-500 hover:underline">
              Terms of Service
            </Link>{" "}
            and {" "}
            <Link href="/privacy" className="text-blue-500 hover:underline">
              Privacy Policy
            </Link>
          </CardDescription>
        </div>
        <CardDescription className="text-sm text-red-500">
           I love you budi ❤️❤️
          </CardDescription>
        </CardHeader>

        <div className="px-7 mb-2">
          <DottedSeparator />
        </div>

      <CardContent className="p-7">
        <form className="space-y-4">

          <Input
            required
            type="text"
            value=""
            onChange={() => {}}
            placeholder="Enter your name"
            disabled={false}
          />

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
            minLength={5}
            maxLength={20}
          />
          <Button disabled={false} type="submit" className="w-full">
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

          <CardContent >
            <Button disabled={false} type="submit" className="w-full" variant="secondary" >
              <FaFacebook className="mr-2" size={20} /> 
              Login with Facebook
            </Button>
          </CardContent>
  
    </Card>
  );
};

export default SignUpCard;