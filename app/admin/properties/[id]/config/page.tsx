"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"

interface ConfigField {
  label: string
  key: string
  type: "number" | "percentage" | "boolean"
  description: string
  min?: number
  max?: number
  step?: number
}

const configFields: ConfigField[] = [
  {
    label: "Puntos por Peso",
    key: "puntosPorPeso",
    type: "number",
    description: "Cuántos puntos equivalen a 1 peso uruguayo",
    min: 1,
    max: 100,
    step: 0.1
  },
  {
    label: "Máxima Reducción (%)",
    key: "maxReduccionPorcentaje",
    type: "percentage",
    description: "Porcentaje máximo de reducción del alquiler",
    min: 0,
    max: 100,
    step: 1
  },
  {
    label: "Máximo Puntos Mensuales",
    key: "maxPuntosMensuales",
    type: "number",
    description: "Cantidad máxima de puntos que se pueden ganar por mes",
    min: 0,
    max: 50000,
    step: 100
  },
  {
    label: "Puntos - Limpieza Básica",
    key: "puntosLimpiezaBasica",
    type: "number",
    description: "Puntos por tareas de limpieza básica",
    min: 0,
    max: 1000,
    step: 10
  },
  {
    label: "Puntos - Limpieza Profunda",
    key: "puntosLimpiezaProfunda",
    type: "number",
    description: "Puntos por limpieza profunda",
    min: 0,
    max: 1000,
    step: 10
  },
  {
    label: "Puntos - Mantenimiento",
    key: "puntosMantenimiento",
    type: "number",
    description: "Puntos por tareas de mantenimiento",
    min: 0,
    max: 1000,
    step: 10
  },
  {
    label: "Puntos - Reparación",
    key: "puntosReparacion",
    type: "number",
    description: "Puntos por reparaciones",
    min: 0,
    max: 1000,
    step: 10
  },
  {
    label: "Puntos - Jardinería",
    key: "puntosJardineria",
    type: "number",
    description: "Puntos por tareas de jardinería",
    min: 0,
    max: 1000,
    step: 10
  },
  {
    label: "Puntos - Administrativo",
    key: "puntosAdministrativo",
    type: "number",
    description: "Puntos por tareas administrativas",
    min: 0,
    max: 1000,
    step: 10
  },
  {
    label: "Puntos - Emergencia",
    key: "puntosEmergencia",
    type: "number",
    description: "Puntos por atender emergencias",
    min: 0,
    max: 2000,
    step: 50
  },
  {
    label: "Puntos - Comunidad",
    key: "puntosComunidad",
    type: "number",
    description: "Puntos por actividades comunitarias",
    min: 0,
    max: 1000,
    step: 10
  },
  {
    label: "Bonus Consistencia",
    key: "bonusConsistencia",
    type: "number",
    description: "Multiplicador por completar tareas consistentemente (1.0 = sin bonus)",
    min: 1,
    max: 3,
    step: 0.1
  },
  {
    label: "Bonus Calidad",
    key: "bonusCalidad",
    type: "number",
    description: "Multiplicador por trabajo de alta calidad (1.0 = sin bonus)",
    min: 1,
    max: 3,
    step: 0.1
  },
  {
    label: "Bonus Rapidez",
    key: "bonusRapidez",
    type: "number",
    description: "Multiplicador por completar tareas rápidamente (1.0 = sin bonus)",
    min: 1,
    max: 3,
    step: 0.1
  },
  {
    label: "Tiempo Máximo Revisión (horas)",
    key: "tiempoMaximoRevision",
    type: "number",
    description: "Horas máximas para revisar una tarea completada",
    min: 1,
    max: 168,
    step: 1
  },
  {
    label: "Requiere Verificación",
    key: "requiereVerificacion",
    type: "boolean",
    description: "¿Las tareas requieren verificación antes de otorgar puntos?"
  },
  {
    label: "Verificación por Pares",
    key: "verificacionPorPares",
    type: "boolean",
    description: "¿Otros inquilinos pueden verificar tareas completadas?"
  }
]

export default function PropertyConfigPage() {
  const params = useParams()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [property, setProperty] = useState<any>(null)
  const [config, setConfig] = useState<any>({})

  const handleChange = (key: string, value: any) => {
    setConfig((prev: any) => ({
      ...prev,
      [key]: value
    }))
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      const response = await fetch(`/api/properties/${params.id}/config`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(config)
      })

      if (!response.ok) {
        throw new Error("Error al guardar configuración")
      }

      alert("Configuración guardada exitosamente")
    } catch (error) {
      console.error("Error saving config:", error)
      alert("Error al guardar la configuración")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link href="/admin/properties">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold">Configuración de Propiedad</h1>
              <p className="text-gray-600">{property?.nombre || "Cargando..."}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Configuración de Puntos */}
          <Card>
            <CardHeader>
              <CardTitle>Sistema de Puntos</CardTitle>
              <CardDescription>
                Configurá la conversión y límites de puntos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {configFields.slice(0, 3).map((field) => (
                <div key={field.key}>
                  <label className="block text-sm font-medium mb-1">
                    {field.label}
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-md"
                    value={config[field.key] || 0}
                    onChange={(e) => handleChange(field.key, parseFloat(e.target.value))}
                    min={field.min}
                    max={field.max}
                    step={field.step}
                  />
                  <p className="text-xs text-gray-500 mt-1">{field.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Valores de Puntos por Categoría */}
          <Card>
            <CardHeader>
              <CardTitle>Puntos por Categoría</CardTitle>
              <CardDescription>
                Define cuántos puntos vale cada tipo de tarea
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {configFields.slice(3, 11).map((field) => (
                <div key={field.key} className="flex items-center justify-between">
                  <div className="flex-1">
                    <label className="block text-sm font-medium">
                      {field.label.replace("Puntos - ", "")}
                    </label>
                    <p className="text-xs text-gray-500">{field.description}</p>
                  </div>
                  <input
                    type="number"
                    className="w-24 px-3 py-2 border rounded-md ml-4"
                    value={config[field.key] || 0}
                    onChange={(e) => handleChange(field.key, parseInt(e.target.value))}
                    min={field.min}
                    max={field.max}
                    step={field.step}
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Bonificaciones */}
          <Card>
            <CardHeader>
              <CardTitle>Bonificaciones</CardTitle>
              <CardDescription>
                Multiplicadores para incentivar buen desempeño
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {configFields.slice(11, 14).map((field) => (
                <div key={field.key}>
                  <label className="block text-sm font-medium mb-1">
                    {field.label}
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      className="w-24 px-3 py-2 border rounded-md"
                      value={config[field.key] || 1}
                      onChange={(e) => handleChange(field.key, parseFloat(e.target.value))}
                      min={field.min}
                      max={field.max}
                      step={field.step}
                    />
                    <span className="text-sm text-gray-600">
                      x{config[field.key] || 1} ({Math.round(((config[field.key] || 1) - 1) * 100)}% extra)
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{field.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Verificación */}
          <Card>
            <CardHeader>
              <CardTitle>Sistema de Verificación</CardTitle>
              <CardDescription>
                Configuración del proceso de verificación de tareas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  {configFields[14].label}
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border rounded-md"
                  value={config[configFields[14].key] || 48}
                  onChange={(e) => handleChange(configFields[14].key, parseInt(e.target.value))}
                  min={configFields[14].min}
                  max={configFields[14].max}
                />
                <p className="text-xs text-gray-500 mt-1">{configFields[14].description}</p>
              </div>

              {configFields.slice(15, 17).map((field) => (
                <div key={field.key} className="flex items-center justify-between">
                  <div>
                    <label className="block text-sm font-medium">
                      {field.label}
                    </label>
                    <p className="text-xs text-gray-500">{field.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={config[field.key] || false}
                      onChange={(e) => handleChange(field.key, e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <Button
            size="lg"
            onClick={handleSave}
            disabled={saving}
            className="flex items-center space-x-2"
          >
            <Save className="h-5 w-5" />
            <span>{saving ? "Guardando..." : "Guardar Configuración"}</span>
          </Button>
        </div>
      </div>
    </div>
  )
}