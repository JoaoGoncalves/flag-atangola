import { inject } from "@angular/core";
import { AuthServices } from "../../services/auth.services";

export function isAuth(){
    const authService = inject(AuthServices);
    return authService.isAuth$.asObservable();
}