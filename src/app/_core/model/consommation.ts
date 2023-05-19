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
	modele:String;
	serie:String;
	speed:number;
	consommation_city:number;
	consommation_highway:number;
	mixed_consommation:number;
}
