import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import Link from "next/link";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="p-6 shadow-md bg-white">
        <h1 className="text-3xl font-bold">NK Automobiles</h1>
        <p className="text-gray-600">Your trusted spare parts partner</p>
      </header>

      {/* About Section */}
      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">About Us</h2>
        <p>
          NK Automobiles provides genuine spare parts for multiple car brands.
          Our goal is to make it easy for customers to find and order exactly what
          they need.
        </p>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Spare Parts by Brand</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Maruti */}
            <Link href="/brands/maruti">
              <div className="border rounded-lg shadow p-6 text-center hover:shadow-lg transition cursor-pointer">
                <h3 className="text-xl font-semibold mb-4">Maruti Suzuki</h3>
                <p className="text-gray-600">Browse genuine Maruti Suzuki spare parts.</p>
              </div>
            </Link>
            {/* Hyundai */}
            <Link href="/brands/hyundai">
              <div className="border rounded-lg shadow p-6 text-center hover:shadow-lg transition cursor-pointer">
                <h3 className="text-xl font-semibold mb-4">Hyundai</h3>
                <p className="text-gray-600">Browse genuine Hyundai spare parts.</p>
              </div>
            </Link>
            {/* Toyota */}
            <Link href="/brands/toyota">
              <div className="border rounded-lg shadow p-6 text-center hover:shadow-lg transition cursor-pointer">
                <h3 className="text-xl font-semibold mb-4">Toyota</h3>
                <p className="text-gray-600">Browse genuine Toyota spare parts.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="Your Name" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Your Email" />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="How can we help?" />
          </div>
          <Button type="submit">Send Inquiry</Button>
        </form>
      </section>
    </main>
  )
}
