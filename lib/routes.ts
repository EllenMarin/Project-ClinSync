import { createRouteMatcher } from "@clerk/nextjs/server";
import { create } from "domain";

/*"roles" de usuário têm permissão para acessar determinadas rotas

type RouteAcessProps = {
    [key: string]: string[];
};

export const routeAccess: RouteAcessProps = {
    "/admin(.*)": ["admin"],
    "/patient(.*)": ["admin", "patient", "doctor"],
    "/doctor(.*)": ["admin", "doctor"],

};*/
export const routeMatchers = {
    admin:createRouteMatcher([
        "/admin(.*)",
        "/patient(.*)",
        "/doctor(.*)",
    ]),
    patient : createRouteMatcher([
        "/patient(.*)",
        "/patient/registrations"
    ]),
    doctor: createRouteMatcher([
        "/doctor(.*)",
        "/doctor/registrations"
    ])
}