// Built-in Libraries
import { useEffect, useState } from 'react'

// Third-party Libraries
import { ref, onValue, update } from "firebase/database";
import toast, { Toaster } from 'react-hot-toast';

// Config
import { db } from "../config/Firebase"

// Components
import SEO from "../components/SEO";
import BottomNav from "../components/BottomNav";
import Loading from "../components/Loading";
const notify = () => toast.success("Berhasil mengubah mode")

export default function Config() {
  const [loading, setLoading] = useState(true)
  const [mode, setMode] = useState(0)

  useEffect(() => {
    const modeRef = ref(db, '/v1/config/mode')
    const unsubcribe = onValue(modeRef, (snapshot) => {
      setMode(snapshot.val())
      setLoading(false)
    })

    return unsubcribe
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const modeRef = ref(db, '/v1/config')
    update(modeRef, {
      mode: mode
    })
    notify()

    return 
  }
  
  return (
    <>
      <SEO subtitle="Configure" />
      <h1 className="w-full py-5 text-2xl font-semibold text-center">
        Configure
      </h1>
      <main className="mb-auto">
        {
          loading ?
            <Loading />
          :
            <div className="px-5">
              <form  className="flex flex-col" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block mb-2 font-semibold">Mode</label>
                  <div>
                    <input 
                      type="radio"
                      name="selectMode"
                      id="modeSiram"
                      className="form-radio mr-2"
                      value="1"
                      checked={mode == 1 ? true : false}
                      onChange={
                        (e) => {
                          setMode(parseInt(e.target.value))
                          e.target.setAttribute('checked', true)
                        }
                      }
                    />
                    <span>Mode 1 (Penyiraman)</span>
                  </div>
                  <div>
                    <input 
                      type="radio"
                      name="selectMode"
                      id="modeDeteksi"
                      className="form-radio mr-2"
                      value="2"
                      checked={mode == 2 ? true : false}
                      onChange={
                        (e) => {
                          setMode(parseInt(e.target.value))
                          e.target.setAttribute('checked', true)
                        }
                      }
                    />
                    <span>Mode 2 (Deteksi Penyakit)</span>
                  </div>
                </div>
                <div className="mb-4">
                  <button type="submit" className="w-full px-3 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600">Update</button>
                </div>
              </form>
            </div>
        }
      </main>
      <Toaster />
      <BottomNav />
    </>
  )
}
