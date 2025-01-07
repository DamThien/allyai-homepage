import { useState } from "react"
import { Crown } from 'lucide-react'
import { CardHeader, Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const PricingTable = () => {
    const [billingInterval, setBillingInterval] = useState<"monthly" | "yearly">("monthly")
  
    const plans = [
      {
        name: "FREE",
        price: "$0",
        features: [
          "GPT-3.5-Turbo LLM",
          "30 message credits",
          "1 chatbot",
          "200,000 characters per chatbot",
          "Embed on unlimited websites",
          "Upload multiple files"
        ],
        buttonText: "Current Plan",
        color: "#c0d4ec"
      },
      {
        name: "ENTRY",
        price: "$30",
        features: [
          "GPT-4 LLM",
          "2,000 message credits",
          "3 chatbot",
          "800,000 characters per chatbot"
        ],
        extraFeatures: [
          "Upload websites",
          "Voice to text",
          "Save conversations",
          "Share conversations",
          "Edit knowledge base"
        ],
        buttonText: "1 month free trial",
        color: "#c1f0e5"
      },
      {
        name: "PREMIUM",
        price: "$90",
        popular: true,
        features: [
          "GPT-4 LLM",
          "6,000 message credits",
          "5 chatbot",
          "2,000,000 characters per chatbot"
        ],
        extraFeatures: [
          "Remove 'Powered by Ally AI'",
          "Upload videos",
          "Upload images",
          "API Access",
          "Chatbot white-labeling"
        ],
        buttonText: "1 month free trial",
        color: "#83b6e2"
      },
      {
        name: "ENTERPRISE",
        price: "Contact",
        features: [
          "GPT-4 LLM",
          "Unlimited mess credits",
          "Unlimited chatbot",
          "Unlimited characters per chatbot"
        ],
        extraFeatures: [
          "Llama 2 and Falcon LLMs",
          "Custom instance of white-labelled Ally AI application",
          "Custom integrations"
        ],
        buttonText: "Contact Us",
        color: "#66e4dd"
      }
    ]
  
    return (
      <div className="flex flex-col px-4 w-full py-8 bg-white mt-12 item-center">
        <div className="text-center mb-12">
          <h1 className="w-full text-3xl font-bold text-center">Bảng giá</h1>
          <div className="mt-6 inline-flex items-center rounded-full border p-1 bg-background">
            <button
              onClick={() => setBillingInterval("monthly")}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                billingInterval === "monthly" ? "bg-primary text-primary-foreground" : ""
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingInterval("yearly")}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                billingInterval === "yearly" ? "bg-primary text-primary-foreground" : ""
              }`}
            >
              Yearly
            </button>
          </div>
        </div>
  
        <div className="container self-center grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className="relative flex flex-col border-[1px]"
              style={{
                background: `linear-gradient(145deg, ${plan.color}40, ${plan.color}60)`,
                borderColor: plan.color
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Popular
                </div>
              )}
              <CardHeader className="pb-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold">{plan.name}</h3>
                    <div className="mt-2 flex items-baseline">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      {plan.price !== "Contact" && (
                        <span className="ml-1 text-sm text-muted-foreground">
                          per {billingInterval === "monthly" ? "month" : "year"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <Button 
                  className="w-full mt-4 mb-6"
                  variant={plan.name === "FREE" ? "secondary" : "default"}
                  style={{
                    backgroundColor: plan.color,
                    color: "#000000",
                    opacity: 0.9
                  }}
                >
                  {plan.buttonText}
                </Button>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg
                        className="h-4 w-4 mr-2 text-green-500"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                {plan.extraFeatures && (
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Crown className="h-4 w-4" />
                      <span className="font-medium">Everything in {plan.name === "ENTRY" ? "Free" : "Entry"}, plus</span>
                    </div>
                    <ul className="space-y-2">
                      {plan.extraFeatures.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <svg
                            className="h-4 w-4 mr-2 text-green-500"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }