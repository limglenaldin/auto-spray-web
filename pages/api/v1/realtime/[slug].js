import { ref, onValue, update, set } from "firebase/database";
import { db } from '../../../../config/Firebase';

export default function handler(req, res) {
  const path = req.query
  const body = req.body
  const dbRef = ref(db, `/v1/${path.slug}`)

  if (req.method === 'GET') {
    let data;
    
    try {
      const unsubcribe = onValue(dbRef, (snapshot) => {
        data = snapshot.val()
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
    try {
      set(dbRef, body)

      res.status(200).json({
        "message": "Successful store information"
      })
    } catch (error) {
      res.status(500).json({
        "message": `${error}`
      })
    }
	} else if (req.method === 'PUT') {
    try {
      update(dbRef, body)

      res.status(200).json({
        "message": "Successful update information"
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