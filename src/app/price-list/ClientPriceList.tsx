"use client";

import { useState, useMemo } from "react";
import { Search, Filter, Stethoscope } from "lucide-react";

type PriceItem = {
  name: string;
  price: number;
  category: string;
  notes?: string;
};

export default function ClientPriceList({ initialData }: { initialData: PriceItem[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(initialData.map((item) => item.category)))].sort();

  const filteredData = useMemo(() => {
    return initialData.filter((item) => {
      const normalize = (str: string) => str.replace(/\s+/g, '').toLowerCase();
      const matchesSearch = normalize(item.name).includes(normalize(searchTerm));
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, initialData]);

  // Group by category for display if viewing "All", otherwise just show list
  const displayData = useMemo(() => {
    if (selectedCategory !== "All") {
      return { [selectedCategory]: filteredData };
    }
    return filteredData.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {} as Record<string, PriceItem[]>);
  }, [filteredData, selectedCategory]);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden relative z-20">
      {/* Controls Header */}
      <div className="p-6 md:p-8 border-b border-slate-100 bg-white">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl leading-5 bg-slate-50 placeholder-slate-500 focus:outline-none focus:placeholder-slate-400 focus:ring-2 focus:ring-stLukes-500 focus:border-stLukes-500 transition-all sm:text-sm"
              placeholder="Search tests (e.g., FBS, FBC)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <Filter className="h-5 w-5 text-slate-400 shrink-0" />
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? "bg-stLukes-100 text-stLukes-600 border-stLukes-500 border"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* List Content */}
      <div className="p-6 md:p-8 bg-slate-50/50 min-h-[400px]">
        {Object.keys(displayData).length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="bg-slate-100 p-4 rounded-full mb-4">
              <Search className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No tests found</h3>
            <p className="text-slate-500 max-w-md mx-auto">
              We couldn&apos;t find any tests matching "{searchTerm}". Try checking for spelling errors or adjusting your filters.
            </p>
            <button 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="mt-6 text-stLukes-600 font-medium hover:text-stLukes-600 hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="space-y-10">
            {Object.entries(displayData).map(([category, items]) => (
              <div key={category} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-stLukes-100 p-2 rounded-lg text-stLukes-600">
                    <Stethoscope size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-slate-800">{category}</h2>
                  <div className="h-px bg-slate-200 flex-grow ml-4"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {items.map((item, index) => (
                    <div 
                      key={index} 
                      className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-stLukes-500 transition-all group"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h3 className="font-semibold text-slate-800 group-hover:text-stLukes-600 transition-colors">
                            {item.name}
                          </h3>
                          {item.notes && (
                            <span className="inline-block mt-1 text-xs font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md">
                              {item.notes}
                            </span>
                          )}
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-sm text-slate-500 font-medium mr-1">Rs.</span>
                          <span className="text-lg font-bold text-slate-900">{item.price.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
