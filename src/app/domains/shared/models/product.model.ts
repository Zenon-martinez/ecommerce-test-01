export interface Product {
  id: number
  precio?: number
  nombre: string
  marca: string
  descripcion?: string | null
  detalles?: string | null
  peso?: string | null
  ancho?: string | null
  alto?: string | null
  largo?: string | null
  imagen?: string | null
  elementos_recomendados: number
  fecha_registro: string
  sku: string
  activo: number
  convertida: number
  unique_id: string
  marca_autoparte: any
  subsubcategoria: any
}
