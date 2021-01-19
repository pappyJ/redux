import { useState, useEffect } from "react";

import { storage } from "./firebase";

function FileHandler() {
  const imageBucket = { imageUrl: "" };

  const [imageUrlState, setImageUrlState] = useState(imageBucket);

  const [imageFileState, setImageFileState] = useState("");

  useEffect(() => {
    const handleImageFile = (e) => {
      const image = e.target.files[0];

      setImageFileState(image);
    };

    const firebaseImageUpload = (e) => {
      e.preventDefault();

      console.log("File Upload In Progress .....");

      if (imageFileState === "")
        //list of allowed file extensions
        console.error(`Not An Image ! ${typeof imageFileState} Not Supported`);

      const imgExt = [
        "image/apng",
        "image/avif",
        "image/gif",
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/webp",
      ];

      //checking if image type is an image

      if (!imgExt.includes(imageFileState.type))
        console.error("File Not Supported ! File Must Be An Image");

      const uploadImage = storage
        .ref(`/images/${imageFileState.name}`)
        .put(imageFileState);

      //initiates the firebase side uploading

      uploadImage.on(
        "state_changed",

        (snapShot) => {
          //takes a snap shot of the process as it is happening
          console.log(snapShot);
        },
        (err) => {
          //catches the errors
          console.err(err);
        },
        () => {
          // gets the functions from storage refences the image storage in firebase by the children
          // gets the download url then sets the image from firebase as the value for the imgUrl key:
          storage
            .ref("images")

            .child(imageFileState.name)

            .getDownloadURL()

            .then((url) => {
              setImageUrlState((prevObject) => ({
                ...prevObject,

                imageUrl: url,
              }));

              setImageFileState(null);
            });
        }
      );

      console.log("File Upload Successful .....");
    };

    return {
      getInputFile: handleImageFile,
      uploadFile: firebaseImageUpload,
      imageUrl: imageUrlState.imageUrl,
    };
  });
}

export default FileHandler;
