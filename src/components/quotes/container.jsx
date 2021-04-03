import React, { useEffect, useState } from "react";
import { db } from "../../utils/firebase";

const Container = ({ drilledProp }) => {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    db.collection("quotes")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          let obj = { id: doc.id, ...doc.data() };
          console.log(obj);
          setQuotes((prev) => [...prev, obj]);
        });
      })
      .catch((e) => {
        console.log(e);
      });
    console.log(quotes);
    //   return () => {
    //       cleanup
    //   }
  }, []);

  const listAtts = (data) => {
    console.log("data", data);
    for (const [key, val] of Object.entries(data)) {
      console.log(key, ":", val);
      return <ul>{val}</ul>;
    }
  };

  return (
    <div>
      I am a Container of quotes.
      <div>{drilledProp}</div>
      {quotes && quotes.map((q) => <ul>{listAtts(q)}</ul>)}
    </div>
  );
};

export default Container;
