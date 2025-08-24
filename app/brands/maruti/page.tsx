export default function MarutiPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Maruti Suzuki Spare Parts</h1>
      <p className="text-gray-600 mb-10">
        Explore our range of genuine Maruti Suzuki spare parts.
      </p>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <li className="border rounded-lg shadow p-6">Brake Pads</li>
        <li className="border rounded-lg shadow p-6">Clutch Plate</li>
        <li className="border rounded-lg shadow p-6">Headlights</li>
      </ul>
    </main>
  )
}
