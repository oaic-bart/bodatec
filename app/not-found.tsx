import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <section className="section-padding">
      <div className="container-xl text-center py-24">
        <p className="text-6xl font-bold text-steel-200 mb-4">404</p>
        <h1 className="text-2xl font-bold text-navy-900 mb-3">Page not found</h1>
        <p className="text-steel-600 mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">
          <ArrowLeft className="w-4 h-4" /> Return to homepage
        </Link>
      </div>
    </section>
  )
}
