import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card"

export const StatsSection: React.FC = () => {
    const gradientRef = useRef<HTMLDivElement | null>(null);
  
    useEffect(() => {
      const element = gradientRef.current;
      if (!element) return;
  
      const gradients = [
        'linear-gradient(90deg, #60A5FA, #34D399)',
        'linear-gradient(90deg, #34D399, #60A5FA)'
      ];
  
      let progress = 0;
      let animationFrameId: number;
      const animate = () => {
        progress += 0.002;
        if (progress >= 1) progress = 0;
  
        const index = Math.floor(progress * gradients.length);
        const nextIndex = (index + 1) % gradients.length;
        const interpolation = (progress * gradients.length) % 1;
  
        element.style.backgroundImage = `linear-gradient(90deg, 
          ${interpolateColor(gradients[index], gradients[nextIndex], interpolation)})`;
  
        animationFrameId = requestAnimationFrame(animate);
      };
  
      animate();
  
      return () => cancelAnimationFrame(animationFrameId);
    }, []);
  
    const interpolateColor = (start: string, end: string, progress: number): string => {
      const startRGB = start.match(/#.{6}/g)?.map(hex => hexToRgb(hex)) || [];
      const endRGB = end.match(/#.{6}/g)?.map(hex => hexToRgb(hex)) || [];
  
      const result = startRGB.map((start, i) => {
        const end = endRGB[i];
        return `rgb(${Math.round(start.r + (end.r - start.r) * progress)},
                    ${Math.round(start.g + (end.g - start.g) * progress)},
                    ${Math.round(start.b + (end.b - start.b) * progress)})`;
      });
  
      return result.join(', ');
    };
  
    const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return { r, g, b };
    };
  
    return (
      <div className="container w-full mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">
          Ally AI: Giải pháp bán hàng bằng AI tốt nhất!
        </h1>
  
        <div
          ref={gradientRef}
          className="grid gap-6 md:grid-cols-3 p-6 rounded-xl overflow-hidden"
        >
          {[95, '5M+', 60].map((value, index) => (
            <Card key={index} className="bg-transparent text-white border-none shadow-none hover:scale-[115%] duration-600 transition-transform">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <div className="text-5xl md:text-6xl font-bold mb-4">{value}%</div>
                <h2 className="text-xl md:text-2xl mb-3">
                  {index === 0 && 'Tỷ lệ hài lòng của khách hàng'}
                  {index === 1 && 'Tương tác AI hàng tháng'}
                  {index === 2 && 'Tăng hiệu quả'}
                </h2>
                <p className="text-sm text-gray-200">
                  {index === 0 && 'Các giải pháp AI của chúng tôi giữ cho khách hàng luôn hài lòng.'}
                  {index === 1 && 'Cung cấp hàng triệu cuộc trò chuyện mỗi tháng.'}
                  {index === 2 && 'Nâng cao năng suất của nhóm với các công cụ AI của chúng tôi.'}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  };
  