import { RolModel } from './rol.model'

export class UsuarioModel {

    id?: number;
    primer_nombre!: string;
    segundo_nombre!: string;
    primer_apellido!: string;
    segundo_apellido!: string;
    sexo!: number;
    tipo_documento!: number;
    numero_documento!: string;
    correo_electronico!: string;
    celular!: string;
    id_rol_asig!: number;
    password!: string;
    rol !: RolModel;

    constructor() {
    }
}