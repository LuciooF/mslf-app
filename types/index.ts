export interface User {
  id: string
  email: string
  nombre: string
  apellido: string
  telefono?: string
  cedula: string
  role: 'ADMIN' | 'TENANT' | 'MANAGER'
  activo: boolean
}

export interface Property {
  id: string
  nombre: string
  direccion: string
  ciudad: string
  departamento: string
  codigoPostal?: string
  descripcion?: string
  cantidadHabitaciones: number
  cantidadBanos: number
  areaConstruida?: number
  amenidades: string[]
  activa: boolean
  configuracion?: PropertyConfig
}

export interface PropertyConfig {
  id: string
  propertyId: string
  puntosPorPeso: number
  maxReduccionPorcentaje: number
  maxPuntosMensuales: number
  puntosLimpiezaBasica: number
  puntosLimpiezaProfunda: number
  puntosMantenimiento: number
  puntosReparacion: number
  puntosJardineria: number
  puntosAdministrativo: number
  puntosEmergencia: number
  puntosComunidad: number
  bonusConsistencia: number
  bonusCalidad: number
  bonusRapidez: number
  tiempoMaximoRevision: number
  requiereVerificacion: boolean
  verificacionPorPares: boolean
}

export interface Task {
  id: string
  titulo: string
  descripcion: string
  categoria: TaskCategory
  prioridad: TaskPriority
  estado: TaskStatus
  puntosBase: number
  puntosFinales?: number
  bonificacion: number
  tiempoEstimado?: number
  tiempoReal?: number
  fechaCreacion: Date
  fechaAsignacion?: Date
  fechaInicio?: Date
  fechaCompletado?: Date
  fechaLimite?: Date
  esRecurrente: boolean
  frecuenciaDias?: number
  proximaOcurrencia?: Date
  propertyId: string
  createdById: string
  assignedToId?: string
  property?: Property
  createdBy?: User
  assignedTo?: User
  verifications?: TaskVerification[]
  evidencia?: TaskEvidence[]
}

export interface TaskVerification {
  id: string
  taskId: string
  verifiedById: string
  estado: VerificationStatus
  comentarios?: string
  calificacion?: number
  fechaVerificacion: Date
  verifiedBy?: User
}

export interface TaskEvidence {
  id: string
  taskId: string
  tipo: 'imagen' | 'video' | 'documento'
  url: string
  descripcion?: string
  fechaCarga: Date
}

export interface PointTransaction {
  id: string
  userId: string
  tenancyId: string
  puntos: number
  tipo: 'ganado' | 'usado' | 'expirado' | 'ajuste'
  descripcion: string
  taskId?: string
  rentPaymentId?: string
  fechaTransaccion: Date
  fechaExpiracion?: Date
}

export interface RentPayment {
  id: string
  tenancyId: string
  propertyId: string
  mes: number
  año: number
  montoBase: number
  puntosUsados: number
  descuentoPuntos: number
  montoFinal: number
  estado: PaymentStatus
  metodoPago?: string
  comprobante?: string
  notas?: string
  fechaVencimiento: Date
  fechaPago?: Date
  fechaCreacion: Date
}

export type TaskStatus = 'PENDIENTE' | 'ASIGNADA' | 'EN_PROGRESO' | 'EN_REVISION' | 'COMPLETADA' | 'RECHAZADA'
export type TaskPriority = 'BAJA' | 'MEDIA' | 'ALTA' | 'URGENTE'
export type TaskCategory = 'LIMPIEZA' | 'MANTENIMIENTO' | 'REPARACION' | 'JARDINERIA' | 'ADMINISTRATIVO' | 'EMERGENCIA' | 'COMUNIDAD'
export type VerificationStatus = 'PENDIENTE' | 'APROBADA' | 'RECHAZADA' | 'REQUIERE_REVISION'
export type PaymentStatus = 'PENDIENTE' | 'PAGADO' | 'PARCIAL' | 'VENCIDO'