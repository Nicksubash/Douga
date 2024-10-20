"use client"

import { Button } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import heroImage from "../../public/Image/heroImage.jpg"

export default function HeroSection() {
    return (
        <div className="flex flex-col items-center text-center p-8 mt-5">
            <h1 className="text-4xl font-bold mb-6">Only Platform You Need</h1>
            <div className="w-full max-w-[500px] mb-6 rounded-lg">
                <Image 
                    src={heroImage} 
                    alt="Hero image showcasing the platform" 
                    style={{ borderRadius: '2%' }} 
                    width={500} 
                    height={300} 
                    layout="responsive"
                />
            </div>
            <h2 className="text-3xl font-semibold mb-6">
                One Platform, <br/> Unlimited Creativity
            </h2>
            <Button  className="text-white bg-black rounded-md p-2" size="lg">Start Now</Button>
        </div>
    )
}