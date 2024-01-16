import {useEffect, useState} from "react";

import styles from './ImageUploader.module.css'
import {createRequestPath} from "../../helpers/helpers";
import {BLOGS_IMAGE_UPLOAD_ENDPOINT} from "../../constants/endpoints";


const ImageUploader = ({ setImageFunction }) => {
    const url = createRequestPath(BLOGS_IMAGE_UPLOAD_ENDPOINT)

    const [selectedFile, setSelectedFile] = useState(null);
    const [imgUrl, setImgUrl] = useState(null);



    const onImageChange = async (e) => {
        const imageFile = e.target.files[0];

        const reader = new FileReader();

        reader.addEventListener("load", (e) => {
            setSelectedFile(e.target.result);
            reader.readAsDataURL(imageFile);
        });
        reader.readAsDataURL(imageFile);
    }

    useEffect(() => {
        if (selectedFile) {
            console.log()
            fetch(url, {
                method: "POST",
                body: JSON.stringify({ image: selectedFile }),
                headers: { "Content-Type": "application/json" },
            })
                .then(resp => resp.json())
                .then(resp => {
                    const imageUrl = resp[3]?.name;
                    setImageFunction(imageUrl.split('300_')[1])
                    setImgUrl(imageUrl)
                })
        }

    }, [selectedFile, url, setImageFunction]);

    return (
        <div className={styles['common']}>
            <input type="file" onChange={onImageChange}/>
            <img className={styles['image']} src={imgUrl} alt={imgUrl}/>


        </div>
    );
}

export default ImageUploader;
