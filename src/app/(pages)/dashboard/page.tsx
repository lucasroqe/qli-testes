import React from "react";
import { Component } from "@/components/dashboard/home/chart";
import { BarComponent } from "@/components/dashboard/home/bar-chart";
import { WeatherCard } from "@/components/dashboard/home/WeatherCard";
import { WindSpeedAlert } from "@/components/dashboard/home/alert";
import { Thermometer } from "lucide-react";

export default function Teste() {
  return (
    <div className="grid grid-cols-4 auto-rows-auto gap-2">
      <div className="col-start-1">
        <WeatherCard
          title="Temperature"
          value={25}
          unit="°C"
          icon={Thermometer}
          color="#FF7D50"
        />
      </div>
      <div className="col-start-2">
        <WeatherCard
          title="Temperature"
          value={25}
          unit="°C"
          icon={Thermometer}
          color="#FF7D50"
        />
      </div>
      <div className="col-start-3">
        <WeatherCard
          title="Temperature"
          value={25}
          unit="°C"
          icon={Thermometer}
          color="#FF7D50"
        />
      </div>
      <div className="col-start-4">
        <WeatherCard
          title="Temperature"
          value={25}
          unit="°C"
          icon={Thermometer}
          color="#FF7D50"
        />
      </div>
      <div className="col-span-3 col-start-1 row-start-2">
        <Component />
      </div>
      <div className="col-span-3 col-start-1 row-start-3">
        <BarComponent />
      </div>
      <div className="row-span-2 col-start-4 row-start-2 h-full">
        <WindSpeedAlert />
      </div>
    </div>
  );
}
