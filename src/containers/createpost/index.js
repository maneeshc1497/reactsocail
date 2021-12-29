import React, { useContext, useState } from "react";
import { SignInBtn } from "../../components";
import { UserContext } from "../../context/user";
import "./style.css";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import random from "../../helpers/random";
import { db, storage } from "../../firebase";
import firebase from "firebase";
function CreatePost() {
  const [user, setUser] = useContext(UserContext).user;
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const onhandleImage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      var imageUrl = URL.createObjectURL(e.target.files[0]);
      var imgPreview=document.getElementById("image_preview");
      imgPreview.src=imageUrl;
      imgPreview.style.display= "block";
    }
  };
  const onhandleUpload= () =>{
      if(text)
      {
        const ran= random(10);
        const userEmail=user.email.substr(0,user.email.indexOf('@'));
        const imageName=userEmail+ran;
          if(image)
          {
              
              const uploadTask= storage.ref(`images/${imageName}.jpg`).put(image);
              uploadTask.on("state_changed",(snapshot)=>{
                  //progress 1% etc..Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100)
                  const progressValue= Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100);                  
                  setProgress(progressValue);
                  console.log(progress);
                  
              },(error)=>{
                  console.log(error.message);
              },()=>{
                  storage.ref("images").child(`${imageName}.jpg`).getDownloadURL()
                  .then((imageUrl)=>{
                      db.collection("posts").add({
                          caption:text,
                          imageURL:imageUrl,
                          timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                          username: userEmail,
                          profileURL: user.photoURL

                      });
                  });
                  setProgress(0);
                  setText("");
                  var imgPreview=document.getElementById("image_preview");
                  imgPreview.src="";
              });              

          }else{
                db.collection("posts").add({
                    caption:text,
                        imageURL:"",
                        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                        username: userEmail,
                        profileURL: user.photoURL
                });
          }
      }else{
          alert('Caption is empty');
      }

  }
  return (
    <div>
      {user ? (
        <div className="createpost">
          <div className="createpost_loggedin">
            <p>Create Post </p>
            <div className="createpost_loggedinCenter">
              <textarea
                className="createpost_textArea"
                rows="3"
                placeholder="enter your caption here.."
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              ></textarea>
              <div className="createpost_imagePreview">
                <img id="image_preview"  alt="" />
              </div>
            </div>

            <div className="createpost_loggedinBottom">
              <div>
                <label className="createpost_addImage" htmlFor="imgInput">
                  <AddAPhotoIcon />
                </label>

                <input
                  id="imgInput"
                  type="file"
                  accept="image/*"
                  onChange={onhandleImage}
                />
              </div>
              <button
                className="createpost_uploadBtn"
                onClick={onhandleUpload}
                style={{ color: text ? "black" : "lightgrey" }}
                disabled={text ? false:true}
                
              >
               {`Upload ${progress !=0 ? progress: ""}`} 
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="createpost">
          <SignInBtn />
          <p>to post and comment</p>
        </div>
      )}
    </div>
  );
}

export default CreatePost;
