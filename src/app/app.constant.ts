import { environment } from "../environments/environment";

export const BACKEND_HOST ={
    campaignBEUrl: environment.backendUrl,
}


const authURLs={
    signUp:"/api/auth/sign-up",
    signIn:"/api/auth/sign-in",
    checkAuth:"/api/auth/check-auth"
}
const senderURLs={
    createSender:"/api/sender/create",
    senderList:"/api/sender/all",
    getSenderById:"/api/sender/{senderId}",
    getAllSenderIds:"/api/sender/id/all"
}
const templateURLs={
    createTemplate:"/api/template/create",
    templateList:"/api/template/all",
    getTemplateById:"/api/template/{templateId}",
    getAllTemplateIdsBySenderId:"/api/template/id/all/{senderId}",
    getAllTemplateIds:"/api/template/id/all"
}
const campaignURLs={
    createCampaign:"/api/campaign/create",
    campaignList:"/api/campaign/all",
}
export const API_URL = {
    authURLs,
    senderURLs,
    templateURLs,
    campaignURLs
}