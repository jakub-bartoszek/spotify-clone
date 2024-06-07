"use client";

import * as RadixSlider from "@radix-ui/react-slider";

interface SliderProps {
 value?: number;
 onChange?: (value: number) => void;
}

const Slider = ({ value = 0.5, onChange }: SliderProps) => {
 const handleChange = (newValue: number[]) => {
  onChange?.(newValue[0]);
 };

 return (
  <RadixSlider.Root
   onValueChange={handleChange}
   className="group relative flex items-center select-none touch-none w-full h-3"
   defaultValue={[0.5]}
   value={[value]}
   max={1}
   step={0.01}
  >
   <RadixSlider.Track className="bg-neutral-600 relative grow rounded-full h-1">
    <RadixSlider.Range className="absolute bg-white group-hover:bg-green-500 rounded-full h-full" />
   </RadixSlider.Track>
   <RadixSlider.Thumb className="hidden group-hover:block bg-white h-3 w-3 rounded-full cursor-pointer" />
  </RadixSlider.Root>
 );
};

export default Slider;
