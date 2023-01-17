import React, { useState, useEffect } from "react";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../../../../firebase";
import { create } from "@mui/material/styles/createTransitions";
// import { Button } from "./Button"
// import { Modal } from "./Modal"



export default function BasicTable() {

    const [data, setData] = useState([]);

    // const fileRef = ref(storage, 'MCA/First/First_Sem');
    // // console.log('fileRef=>', fileRef)
    // listAll(fileRef).then(res => {
    //     // console.log('ress', res)
    //     res.items.forEach((folderRef) => {
    //         console.log('fold', folderRef)
    //         listAll(folderRef).then(res => console.log('file', res))
    //         // console.log('getDownloadURL', getDownloadURL(ref(storage, folderRef.fullPath)).then(res => console.log(res)))
    //     });
    // }).catch(err => console.log(err))

    // const link = () => {
    //     getDownloadURL(ref(storage, 'MCA/First/First_Sem/Sets.pdf'))
    //         .then((url) => {
    //             console.log(url);
    //             
    //             const win = window.open(url, '_blank');
    //             if (win != null) {
    //                 win.focus();
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }


    const listRef = ref(storage, 'MCA/First/First_Sem/');
    const link = () => {
        listAll(listRef)
            .then(res => {
                res.items.forEach((item) => {
                    setData(arr => [...arr, item.name]);
                    console.log(item.name);
                    getDownloadURL(ref(storage, item.name))
                        .then((url) => {
                            const win = window.open(url, '_blank');
                            if (win != null) {
                                win.focus();
                            }
                        })
                })
            })
            .catch(err => {
                alert(err.message);
            })
    }

    // const download = () => {
    //     getDownloadURL(ref(storage, `MCA/First/First_Sem/Sets.pdf`))
    //         .then((url) => {
    //             console.log(url);

    //             const win = window.open(url, '_blank');
    //             if (win != null) {
    //                 win.focus();
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }


    return (
        <div className="container">
            <br></br>
            <button onClick={link}>List</button>

            <br /><br />
            {
                data.map((val) => (
                    <button onClick={link}>{val}</button>

                ))
            }

        </div>

    );
}
