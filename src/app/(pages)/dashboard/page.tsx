import React from "react";
import { Component } from "@/components/dashboard/home/chart";
import { BarComponent } from "@/components/dashboard/home/bar-chart";
import { WeatherCard } from "@/components/dashboard/home/WeatherCard";
import { WindSpeedAlert } from "@/components/dashboard/home/alert";
import { Thermometer, Droplets } from "lucide-react";
import { ModeToggle } from "@/components/toggle";

export default function Teste() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <WeatherCard
          title="Temperature"
          value={25}
          unit="°C"
          icon={Thermometer}
          color="#FF7D50"
        />
        <WeatherCard
          title="Umidade"
          value={25}
          unit="°C"
          icon={Droplets}
          color="#FF7D50"
        />
        <WeatherCard
          title="Pressão"
          value={25}
          unit="°C"
          icon={Thermometer}
          color="#FF7D50"
        />
        <WeatherCard
          title="Visibilidade"
          value={25}
          unit="°C"
          icon={Thermometer}
          color="#FF7D50"
        />
      </div>
      <Component />
      <div className="grid auto-rows-min gap-4 md:grid-cols-2 mt-4">
        <BarComponent />
        <WindSpeedAlert/>
      </div>
    </div>
  );
}
