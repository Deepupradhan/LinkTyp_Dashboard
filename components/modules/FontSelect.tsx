import React, { useState } from "react";

const fontStyles = [
  { label: "Arial", value: "Arial" },
  { label: "Helvetica", value: "Helvetica" },
  { label: "Georgia", value: "Georgia" },
  { label: "Times New Roman", value: "Times New Roman" },
  { label: "Courier New", value: "Courier New" },
  { label: "Verdana", value: "Verdana" },
  { label: "Trebuchet MS", value: "Trebuchet MS" },
  { label: "Comic Sans MS", value: "Comic Sans MS" },
  { label: "Impact", value: "Impact" },
  { label: "Lucida Console", value: "Lucida Console" },
  { label: "Palatino Linotype", value: "Palatino Linotype" },
  { label: "Bookman Old Style", value: "Bookman Old Style" },
  { label: "Garamond", value: "Garamond" },
  { label: "Arial Black", value: "Arial Black" },
  { label: "MS Sans Serif", value: "MS Sans Serif" },
  { label: "MS Serif", value: "MS Serif" },
  { label: "Symbol", value: "Symbol" },
  { label: "Webdings", value: "Webdings" },
  { label: "Wingdings", value: "Wingdings" },
  { label: "Wingdings 2", value: "Wingdings 2" },
  { label: "Wingdings 3", value: "Wingdings 3" },
];

export default function Fonts() {
  const [selectedFont, setSelectedFont] = useState(fontStyles[0].value);

  const handleFontClick = (event:any) => {
    setSelectedFont(event.target.value);
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="mx-auto max-w-md text-center">
        <h2 className="text-3xl font-bold text-blue-600 uppercase tracking-widest">
          Select Font Style
        </h2>
      </div>
      <div className="flex justify-center pt-10">
        <div className="grid md:grid-cols-5 grid-cols-4 gap-4 w-full px-3">
          {fontStyles.map((font) => {
            return (
              <div
                key={font.value}
                className={`flex flex-col items-center justify-around aspect-square bg-white border rounded-lg cursor-pointer shadow-md hover:shadow-lg ${selectedFont === font.value ? "border-blue-600" : ""}`}
              >
                <label
                  htmlFor={`font-${font.value}`}
                  className={`text-xl font-${font.value} ${
                    selectedFont === font.value ? "text-blue-600" : ""
                  }`}
                >
                  {font.label}
                </label>
                <input
                  className="hidden"
                  type="radio"
                  id={`font-${font.value}`}
                  name="font"
                  value={font.value}
                  checked={selectedFont === font.value}
                  onChange={handleFontClick}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
