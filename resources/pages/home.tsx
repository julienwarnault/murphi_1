import { Head, Link } from '@inertiajs/react'

export default function Home() {
  return (
    <>
      <Head title="Home" />

      <div>
        <h1>Murphi</h1>
        <Link as="button" href="/videos" method="post" data={{ prompt: 'Christophe Colomb' }}>
          Create Video
        </Link>
      </div>
    </>
  )
}
