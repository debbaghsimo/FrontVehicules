import { Engine } from "./engine";
import { Opertingchar } from "./opertingchar";
import { Time } from "./time";
import { Vehicule } from "./vehicule";

export interface Consommation {
	id:number;
	vehicule:Vehicule;
	engine:Engine;
	opertingchar:Opertingchar;
	time:Time;
	maxSpeed:number;
	cityDrivingFuel:number;
	highwayDrivingFuel:number;
	cruisingRange:number;
}
