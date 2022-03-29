import { collection, query, getDocs, orderBy, addDoc } from 'firebase/firestore';
import { fsdb } from '../../../../config/Firebase';

export default async function handler(req, res) {
  const body = req.body
  const collectionRef = collection(fsdb, "records")

  if (req.method === 'GET') {
    let data = []

    try {
      const q = query(collectionRef, orderBy("created_at", "desc"))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          mode: doc.data().mode,
          detection_result: doc.data().detection_result,
          temperature: doc.data().temperature,
          created_at: doc.data().created_at
        })
      })

      res.status(200).send({
        "message": "Successful get information",
        "data": data,
      })
    } catch (error) {
      res.status(500).send({
        "message": `${error}`
      })
    }
  } else if (req.method === 'POST') {
    let data = {
      ...body,
      created_at: new Date()
    }

    try {
      const docRef = addDoc(collectionRef, data)

      res.status(200).json({
        "message": "Successful store information",
        "data": docRef,
      })
    } catch (error) {
      res.status(500).json({
        "message": `${error}`
      })
    }
  } else {
    res.status(405).send({
      "message": "Method not Allowed"
    })
  }
}