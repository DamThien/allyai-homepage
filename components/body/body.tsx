import { Benefits } from "./benefits";
import { AllyFeatures } from "./allyfeatures";
import { StatsSection } from "./stats-section";
import { ProcessFlow } from "./process-flow";
import { PricingTable } from "./pricingtable";
import { FAQ } from "./faq";
import { VerticalAIMarketplace } from "./ventical-ai-marketplace";


export const LandingFormBodyComponent = () => {
    return (
        <div className="w-full">
            <Benefits/>
            <AllyFeatures/>
            <VerticalAIMarketplace/>
            <StatsSection/>
            <ProcessFlow/>
            <PricingTable/>
            <FAQ/>
        </div>
    )
};