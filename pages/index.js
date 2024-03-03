import Head from 'next/head'
import prisma from '../lib/prisma'

export default function Home() {
  return (
    <div className="min-h-screen justify-between">
      <Head>
        <title>Geo-Fencing Application</title>
        <meta name="description" content="Geo-fencing Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-10 mx-auto max-w-4xl">
        <h1 className="text-6xl font-bold mb-4 text-center">
          Geo-Fencing Application
        </h1>
        <p className="mb-20 text-xl text-center">
          Update parameters for the flight geo-fencing application
        </p>
        <div className="flex flex-row space-x-5">
          <div className="w-full items-center flex flex-col justify-center max-w-lg border-2 rounded-lg py-4">
            <div className="text-left items-left flex flex-col justify-left">
              <h3 className="text-xl font-bold">Add Flight Numbers</h3>
              <p>Add the flight numbers you want to track.</p>
              <div className="space-y-4">
                <div className="flex w-full mt-2 items-center space-x-4">
                  <input
                    className="flex-1 border-2 rounded-lg p-2"
                    placeholder="Enter flight number"
                    type="text"
                  />
                  <button className="bg-black text-white py-2 px-4 rounded-md">
                    Add
                  </button>
                </div>
                <ul className="grid grid-cols-2 w-full gap-2">
                  <li className="flex items-center space-x-2">
                    <span>BA232</span>
                    <button
                      className="text-red-500 hover:text-red-700 focus:ring-red-500 focus:text-red-700"
                      size="xs"
                      variant="outline"
                    >
                      Delete
                    </button>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span>VS123</span>
                    <button
                      className="text-red-500 hover:text-red-700 focus:ring-red-500 focus:text-red-700"
                      size="xs"
                      variant="outline"
                    >
                      Delete
                    </button>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span>AA987</span>
                    <button
                      className="text-red-500 hover:text-red-700 focus:ring-red-500 focus:text-red-700"
                      size="xs"
                      variant="outline"
                    >
                      Delete
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full items-center flex flex-col justify-center max-w-lg border-2 rounded-lg py-4">
            <div className="text-left items-left flex flex-col justify-left">
              <h3 className="text-xl font-bold">Change Tracking Region</h3>
              <p>Change the tracking region you want to track.</p>
              <div className="space-y-4">
                <div className="flex w-full mt-2 items-center space-x-4">
                  <input
                    className="flex-1 border-2 rounded-lg p-2"
                    placeholder="Enter tracking region"
                    type="text"
                  />
                  <button className="bg-black text-white py-2 px-4 rounded-md">
                    Update
                  </button>
                </div>
                <p>
                  Currently tracking: <bold className="font-bold">Ireland</bold>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="p-10 text-center">
          <p>
            Built by{' '}
            <a
              className="text-gray-400 underline"
              href="https://willcarkner.com
            "
            >
              Will Carkner
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export async function getStaticProps(context) {
  const data = await prisma.product.findMany({
    include: {
      category: true,
    },
  })

  //convert decimal value to string to pass through as json
  const products = data.map((product) => ({
    ...product,
    price: product.price.toString(),
  }))
  return {
    props: { products },
  }
}
