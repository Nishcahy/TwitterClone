export const uploadToCloudnary=async(pics)=>{
    if(pics){
        const data=new FormData();
        data.append("file",pics)
        data.append("upload_preset","tweeter")
        data.append("cloud_name","dzhvltob2")

        const res=await fetch("https://api.cloudinary.com/v1_1/dzhvltob2/image/upload",{
            method:"post",
            body:data
        })
        const fileData=await res.json();
        console.log('Cloudinary response:', fileData); // Log the entire response

            if (!fileData.url) {
                throw new Error('Upload failed: No URL returned in response');
            }
        return fileData.url.toString();
    }
    else{
        console.log("error from upload")
    }
}