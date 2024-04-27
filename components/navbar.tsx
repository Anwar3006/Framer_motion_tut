import React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Home } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* <!-- Logo --> */}
        <Link href="/" className="text-white text-lg font-bold mx-auto">
          Framer Motion
        </Link>

        {/* <!-- Responsive Menu Button --> */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="lg:hidden focus:outline-none text-white"
              variant="ghost">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Home className="w-4 h-4 mr-4" />
              Home
            </DropdownMenuItem>
            <DropdownMenuItem>
              <svg
                className="w-4 h-4 mr-4"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M28.2966 0L22.5257 1.18063L26.5492 6.53885L29.442 5.9334L28.2966 0ZM18.2085 2.05853L15.3157 2.64884L19.3539 7.99193L22.232 7.40162L18.2085 2.05853ZM11.0132 3.5116L8.12042 4.13219L12.1586 9.47528L15.0367 8.88496L11.0132 3.5116ZM3.80325 5.02523L2.36419 5.31282C0.778285 5.63068 -0.264299 7.23512 0.0587551 8.86983L0.631442 11.8365L7.82674 10.3683L3.80325 5.02523ZM27.0631 14.8638V26.9728H3.5683V14.8638H27.0631ZM30 11.8365H0.631442V26.9728C0.631442 28.6529 1.95303 30 3.5683 30H27.0631C28.6931 30 30 28.6529 30 26.9728V11.8365Z"
                  fill="black"
                />
              </svg>
              Movies
            </DropdownMenuItem>
            <DropdownMenuItem>
              <svg
                className="mr-4 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512">
                <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z" />
              </svg>
              Tv Shows
            </DropdownMenuItem>
            <DropdownMenuItem>
              <svg
                className="mr-4 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512">
                <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z" />
              </svg>
              Categories
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* <!-- Navigation Links (Hidden on Small Screens) --> */}
        <div className="hidden lg:flex space-x-4">
          {/* <Link href="/" className="text-white">
            Home
          </Link> */}
          {/* <a href="/upload" className="text-white">
            Upload
          </a> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
