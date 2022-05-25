// Built-in Libraries
import Link from 'next/link'
import { useEffect, useState } from 'react'

// Third-party Libraries
import { ref, onValue } from "firebase/database";

// Config
import { db } from "../config/Firebase"

// Components
import BottomNav from "../components/BottomNav";
import SEO from "../components/SEO";
import Card from "../components/Card";
import CardSkeleton from "../components/Skeleton/Card";

// Utilities
import EpochConvert from "../utilities/EpochConvert";

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [realtime, setRealtime] = useState()

  useEffect(() => {
    const realtimeRef = ref(db, '/v1')
    const unsubcribe = onValue(realtimeRef, (snapshot) => {
      setRealtime(snapshot.val())
      setLoading(false)
    })

    return unsubcribe
  }, [])

  return (
    <>
      <SEO subtitle="Home" />
      <h1 className="w-full py-5 text-2xl font-semibold text-center">
        Home
      </h1>
      <main className="mb-auto">
        {
          loading ?
            <>
              <div className="grid grid-cols-1 gap-4 px-10">
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
              </div>
            </>
          : 
            <>
              <div className="grid grid-cols-1 gap-4 px-10">
                <Card icon="bi-sliders2" title="Mode" value={ realtime.config.mode }/>
                <Card icon="bi-flower2" title="Deteksi" value={ realtime.monitor.detection } />
                <Card icon="bi-power" title="Device Reset" value={ realtime.monitor.reset } />
                <Card icon="bi-calendar" title="Terakhir Device Reset" value={ EpochConvert(realtime.monitor.lastReset, +7) } />
                <Card icon="bi-calendar2" title="Terakhir Sistem Berjalan" value={ EpochConvert(realtime.monitor.lastRunning, +7) } />
              </div>
            </>
        }
      </main>
      <BottomNav />
    </>
  )
}
