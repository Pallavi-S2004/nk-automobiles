import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const brands = [
  { name: "Maruti", href: "/brands/maruti" },
  { name: "Hyundai", href: "/brands/hyundai" },
  { name: "Toyota", href: "/brands/toyota" },
]

export default function ProductsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {brands.map((brand) => (
          <Link key={brand.name} href={brand.href}>
            <Card className="cursor-pointer hover:shadow-lg transition">
              <CardContent className="p-6 text-center text-xl font-semibold">
                {brand.name}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
