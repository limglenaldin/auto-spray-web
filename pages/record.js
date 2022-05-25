// Built-in Libraries
import { useEffect, useState } from 'react'

// Third-party Libraries
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

// Config
import { fsdb } from "../config/Firebase"

// Components
import BottomNav from "../components/BottomNav";
import SEO from "../components/SEO";
import Loading from "../components/Loading";

// Utilities
import EpochConvert from '../utilities/EpochConvert';

export default function Record() {
  const [loading, setLoading] = useState(true)
  const [records, setRecords] = useState()

  useEffect(() => {
    const collectionRef = collection(fsdb, "records")
    const q = query(collectionRef)

    const unsubcribe = onSnapshot(q, (snapshot) => {
      setRecords(snapshot.docs.map(doc => (
        {
          ... doc.data(),
          id: doc.id,
          result: doc.data().detection_result,
          mode: doc.data().mode,
          created_at: doc.data().created_at+"000",
        }
      )))
      setLoading(false)
    })

    return unsubcribe
  }, [])

  return (
    <>
      <SEO subtitle="Record" />
      <h1 className="w-full py-5 text-2xl font-semibold text-center">
        Record
      </h1>
      <main className="mb-auto">
        {
          loading ?
            <Loading />
          :
            <div className="flex sm:justify-center px-2 mb-5 overflow-x-auto">
              <table className="min-w-full border border-gray-200 shadow text-left table-auto" id="records-table">
                <thead className="border-b bg-gray-50 text-gray-500">
                  <tr className="whitespace-nowrap">
                    <th className="py-1 px-2">Tanggal</th>
                    <th className="py-1 px-2">Mode</th>
                    <th className="py-1 px-2">Hasil</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-300">
                  {
                    Object.keys(records).map((key) => (
                      <tr className="whitespace-nowrap" key={key}>
                        <td className="py-1 px-2">{ EpochConvert(parseInt(records[key].created_at), +7) }</td>
                        <td className="py-1 px-2">{ records[key].mode }</td>
                        <td className="py-1 px-2">{ records[key].result }</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
        }
      </main>
      <BottomNav />
    </>
  )
}
