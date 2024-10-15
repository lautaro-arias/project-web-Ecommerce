import DataResponse from "@/app/login/interface/dataResponseValidation";


export default function saveToCookie(dataResponse: DataResponse) {
    const now = new Date();
    now.setTime(now.getTime() + (60 * 60 * 3000)); 
    
    document.cookie = `auth_token=${dataResponse.token}; path=/; expires=${now.toUTCString()}; Secure; SameSite=Strict`;
    document.cookie = `auth_user=${dataResponse.user._id}; path=/; expires=${now.toUTCString()}; Secure; SameSite=Strict`;
}
