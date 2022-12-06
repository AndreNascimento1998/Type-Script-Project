import { Imprimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./compravel.js";

export interface Modelo<T> extends Imprimivel, Comparavel<T> {
    
}