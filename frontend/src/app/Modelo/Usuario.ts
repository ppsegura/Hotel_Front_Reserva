import { Rol } from "./Rol";

export class Usuario {
    userId!: number;
    username!: string;
    password!: string;
    enabled!: boolean;
    roles!: Rol[];
  }