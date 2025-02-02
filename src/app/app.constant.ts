import { environment } from "../environments/environment";

export const BACKEND_HOST ={
    campaignBEUrl: environment.backendUrl,
}


const authURLs={
    signUp:"/api/auth/sign-up",
    signIn:"/api/auth/sign-in",
    checkAuth:"/api/auth/check-auth",
    test:"/api/auth/test",
}

const featureURLs={
    adminUrl: "/api/test/admin"
}

export const API_URL = {
    authURLs,
    featureURLs
}