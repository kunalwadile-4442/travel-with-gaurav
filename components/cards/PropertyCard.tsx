"use client";

import {
  Car,
  ChevronLeft,
  ChevronRight,
  Heart,
  Users
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface PropertyCardProps {
  id: string;
  title: string;
  price: string;
  location: string;
  images: string[];
  seater: number;
  packages: string[];
  isLiked?: boolean;
  onLikeToggle?: () => void;
}

export default function PropertyCard({
  id,
  title,
  price,
  location,
  images,
  seater,
  packages,
  isLiked = false,
  onLikeToggle
}: PropertyCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [isSwiping, setIsSwiping] = useState(false);



  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setIsSwiping(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;

    const distance = touchStartX - touchEndX;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        setCurrentIndex((prev) =>
          prev === images.length - 1 ? 0 : prev + 1
        );
      }
      else {
        setCurrentIndex((prev) =>
          prev === 0 ? images.length - 1 : prev - 1
        );
      }
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };



  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const hasMultipleImages = images.length > 1;

  return (
    <div
      onTouchStart={hasMultipleImages ? handleTouchStart : undefined}
      onTouchMove={hasMultipleImages ? handleTouchMove : undefined}
      onTouchEnd={hasMultipleImages ? handleTouchEnd : undefined}
      className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative h-64 bg-gray-100 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={hasMultipleImages ? { transform: `translateX(-${currentIndex * 100}%)` } : {}}
        >
          {images.map((img, index) => (
            <div key={index} className={`relative ${hasMultipleImages ? 'min-w-full' : 'w-full'} h-full`}>
              <Image
                src={img || "/placeholder.svg"}
                alt={`${title}-${index}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Slider Controls - Only show if multiple images */}
        {hasMultipleImages && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={16} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight size={16} />
            </button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10">
              <div className="flex gap-1 px-2 py-1 rounded-full bg-black/30">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 rounded-full transition-all ${i === currentIndex
                      ? "w-4 bg-white"
                      : "w-1 bg-white/60"
                      }`}
                  />
                ))}
              </div>
            </div>
          </>
        )}

        {/* Like Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onLikeToggle?.();
          }}
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm z-10"
        >
          <Heart 
            size={16} 
            className={isLiked ? "text-red-500 fill-red-500" : "text-gray-400"} 
          />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Title and Seater */}
        <div className="flex items-start justify-between mb-2 gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-manrope font-semibold text-gray-900 mb-1 break-words">
              {title}
            </h3>
            <p className="text-sm text-gray-500 font-manrope break-words">
              {location}
            </p>
          </div>
          <div className="flex items-center gap-1 text-gray-600 shrink-0">
            <Car size={18} />
            <span className="text-sm font-medium">{seater}</span>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <p className="text-2xl font-manrope font-bold text-[#1466EC]">
            {price}
          </p>
        </div>

        {/* Packages */}
        <div className="space-y-2.5 pt-4 border-t border-gray-100">
          {packages.map((pkg, index) => {
            const [packageName, packagePrice] = pkg.split(":");
            return (
              <div key={index} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                <span className="text-gray-600 font-manrope text-sm leading-relaxed break-words">
                  {packageName?.trim()}
                </span>
                <span className="text-gray-900 font-semibold font-manrope text-sm whitespace-nowrap sm:ml-2">
                  {packagePrice?.trim()}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
