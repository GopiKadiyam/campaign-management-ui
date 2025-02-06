import { environment } from "../environments/environment";

export const BACKEND_HOST ={
    campaignBEUrl: environment.backendUrl,
}


const authURLs={
    signUp:"/api/auth/sign-up",
    signIn:"/api/auth/sign-in",
    checkAuth:"/api/auth/check-auth"
}

const featureURLs={
    adminUrl: "/api/test/admin",
}
const senderURLs={
    createSender:"/api/sender/create",
    senderList:"/api/sender/all",
    getSenderById:"/api/sender/{senderId}",
}
const templateURLs={
    createTemplate:"/api/template/create",
    templateList:"/api/template/all",
    gettemplateById:"/api/template/{templateId}",
}
export const API_URL = {
    authURLs,
    featureURLs,
    senderURLs,
    templateURLs
}