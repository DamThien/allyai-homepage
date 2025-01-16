"use client"

import { AllyAIDocs } from "@/components/alllyai-docs"
import { Navbar } from "@/components/header/navbar";
import { LandingFormFooterComponent } from "@/components/footer/footer";

export default function Home() {
    return (
        <div className="overflow-hidden landing-page-bg">
            <Navbar />
            <AllyAIDocs />
            <LandingFormFooterComponent/>
        </div>
    );
}