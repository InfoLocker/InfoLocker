import { doc, setDoc, collection, addDoc, getDoc, getDocs, deleteDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { db } from "./firebase";

// create object when user logs in
export const postUserId = async(uid) => {

    const docRef = await setDoc(doc(db, "users", uid), {
        userId: uid
    })
}

const checkUserId = async(uid) => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return true;
    } else {
        // docSnap.data() will be undefined in this case
        localStorage.clear();
        window.location.href = "/login"
        return false;
    }
}

// send the dataform data
export const postUserEnteredData = async(label, value, uid, type, docId, edit) => {
        const res = await checkUserId(uid)
        if (res === false) {
            return;
        }
        try {
            if (!edit) {
                if (type === "files") {
                    const docRef = await addDoc(collection(db, "Data", uid, type), {
                        label: label,
                        value: value.fileName,
                        url: value.url
                    })
                } else {
                    const docRef = await addDoc(collection(db, "Data", uid, type), {
                        label: label,
                        value: value
                    })
                }
            } else {
                if (type === "files") {
                    const docRef = await setDoc(doc(db, "Data", uid, type, docId), {
                        label: label,
                        value: value.fileName,
                        url: value.url
                    })
                } else {
                    const docRef = await setDoc(doc(db, "Data", uid, type, docId), {
                        label: label,
                        value: value
                    })
                }
            }
        } catch (e) {
        }

    }
    // delete user data
export const deleteData = async(uid, type, docId, value) => {
    const res = await checkUserId(uid)
    if (res === false) {
        return;
    }
    try {
        const docPath = `Data/${uid}/${type}/${docId}`;
        const res = await deleteDoc(doc(db, docPath));
        if (type === "files") {
            // file delete code
            const storage = getStorage();

            // Create a reference to the file to delete
            const deleteRef = ref(storage, `${uid}/${value}`);

            // Delete the file
            deleteObject(deleteRef).then(() => {
                // File deleted successfully
            }).catch((error) => {
                // Uh-oh, an error occurred!
            });

        }
    } catch (err) {
    }
}




// GET => USER DATA


export const getUserData = async(uid) => {
    const res = await checkUserId(uid)
    if (res === false) {
        return;
    }
    const docRef = doc(db, "Data", uid);
    const docSnap = await getDoc(docRef);
    const detailsCollectionSnap = await getDocs(collection(db, "Data", uid, "details"))
    const linksCollectionSnap = await getDocs(collection(db, "Data", uid, "links"))
    const filesCollectionSnap = await getDocs(collection(db, "Data", uid, "files"))
    let detailsCollection = []
    let linksCollection = []
    let filesCollection = []
        detailsCollectionSnap.forEach(doc => {
            detailsCollection.push({...doc.data(), docId: doc.id })
        })
        linksCollectionSnap.forEach(doc => {
            linksCollection.push({...doc.data(), docId: doc.id })
        })
        filesCollectionSnap.forEach(doc => {
            filesCollection.push({...doc.data(), docId: doc.id })
        })

    return {
        details: detailsCollection,
        links: linksCollection,
        files: filesCollection
    }
}



export const uploadFileData = async(uid, type, docId, edit, file, label) => {
    const res = await checkUserId(uid)
    if (res === false) {
        return;
    }
    // Create a root reference
    const storage = getStorage();

    // Create a reference to 'mountains.jpg'
    const fileRef = ref(storage, `${uid}/${file.name}`);

    // Create a reference to 'images/mountains.jpg'
    // const uploadTask = uploadBytesResumable(fileRef, file);

    await uploadBytes(fileRef, file).then((snapshot) => {
    })
    getDownloadURL(fileRef)
        .then((url) => {
            postUserEnteredData(label, { fileName: file.name, url: url }, uid, type, docId, edit)
        })
        .catch((error) => {
        });
}
//Post Message
export const postMessage = async(nameData, emailData, messageData) => {
    const docRef = await addDoc(collection(db, "message"), {
        name: nameData,
        email: emailData,
        message: messageData
    })
}