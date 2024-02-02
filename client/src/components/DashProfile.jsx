import { Button, TextInput } from "flowbite-react"
import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
function DashProfile() {
    const {currentUser} = useSelector(state => state.user)
    const [imageFile, setImageFile] = useState(null);
    const [imageFileUrl, setImageFIleUrl] = useState(null);
    const filePickerRef = useRef();
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if(file){
            setImageFile(file);
            setImageFIleUrl(URL.createObjectURL(file));
        }
    }

    useEffect(()=> {
        if(imageFile){
            uploadImage()
        }
    }, [imageFile]);
    const uploadImage = async() => {++
      console.log('uploading image');
    }
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
        <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
        <form className="flex flex-col gap-4">
            <input type='file' accept="image/*" onChange={handleImageChange} ref={filePickerRef}  hidden />
            <div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full" onClick={()=> filePickerRef.current.click()}>
            <img src={imageFileUrl||currentUser.profilePicture} alt="user"  className="rounded-full w-full h-full border-8 border-[ligntgray] "/>

            </div>
            <TextInput type='text' id='username' placeholder="username" defaultValue={currentUser.username}/>
            <TextInput type='email' id='email' placeholder="email" defaultValue={currentUser.email}/>
            <TextInput type='password' id='password' placeholder="passoword" defaultValue='**********'/>
            <Button type='submit' gradientDuoTone='purpleToBlue' outline>
                Update
            </Button>
        </form>
        <div className="text-red-500 flex justify-between mt-5">
            <span className="cursor-ponter">Delete Account</span>
            <span className="cursor-ponter">Sign Out</span>
        </div>
    </div>
  )
}

export default DashProfile