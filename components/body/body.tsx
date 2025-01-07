import { Benefits } from "./benefits";
import { AllyFeatures } from "./allyfeatures";
import { StatsSection } from "./stats-section";
import { ProcessFlow } from "./process-flow";
import { PricingTable } from "./pricingtable";
import { FAQ } from "./faq";


export const LandingFormBodyComponent = () => {
    return (
        <div className="w-full">
            <Benefits/>
            <AllyFeatures/>
            <StatsSection/>
            <ProcessFlow/>
            <PricingTable/>
            <FAQ/>
        </div>
    )
};