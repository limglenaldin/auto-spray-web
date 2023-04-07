import { ref, onValue, update, set, child, get } from "firebase/database";
import { db } from '../../../../config/Firebase';

export default function handler(req, res) {
  const path = req.query
  const body = req.body
  const dbRef = ref(db, `/v1/${path.slug}`)
  // const dbRef = ref(db)

  const getResponses = (response) => {
    res.status(200).send({
      "message": "Successful get information",
      "data": response,
    })
  }

  if (req.method === 'GET') {
    get(child(dbRef, `/v1/${path.slug}`)).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val()
        getResponses(data)
      } else {
        //
      }
    }).catch((error) => {
      console.error(error);
    });
    
    
    // try {
      
    //   onValue(dbRef, (snapshot) => {
    //     return res.status(200).send({
    //       "message": "Successful get information",
    //       "data": snapshot.val(),
    //     })
    //   });
    //   // const unsubcribe = onValue(dbRef, (snapshot) => {
    //   //   data = snapshot.val()
    //   // })

    //   res.status(200).send({
    //     "message": "Successful get information",
    //     "data": data,
    //   })
    // } catch (error) {
    //   res.status(500).send({
    //     "message": `${error}`
    //   })
    // }
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