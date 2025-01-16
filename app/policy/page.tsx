"use client"

import { AllyAIPolicy } from "@/components/alllyai-policy"
import { Navbar } from "@/components/header/navbar";
import { LandingFormFooterComponent } from "@/components/footer/footer";

export default function Home() {
    return (
        <div className="overflow-hidden landing-page-bg">
            <Navbar />
            <AllyAIPolicy />
            <LandingFormFooterComponent/>
        </div>
    );
}