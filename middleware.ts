/*Fluxo:
  Authenticação: atraves do clerk
  Role: clerk atribui um role que é armazenado nos metadados de sessao
  Requisisção: usuario tenta acessar uma rota
  Interceptação: middleware intercepta a requisição
  Verificação do role: o middleware obtem o role do usuario nos metadados da secap
  Verificação de permissão: o middleware verifica se o role do usuario tem permissão para acessar a rota
  Permissão concedida: Se o usuario tem permissão a requisição continua normalmente, se nao é direcionado para /patient
*/

//Cria matchers para cada padrão de rota definido em routeAccess
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
//import { routeMatchers } from "./lib/routes";
import {  NextResponse } from "next/server";
import { routeAccess } from "./lib/routes";

const matchers = Object.keys(routeAccess).map((route) => ({
  matcher: createRouteMatcher([route]),
  allowedRoles: routeAccess[route],
}));

export default clerkMiddleware(async (auth,req)=> {
  //obtem informaçoes do usuario autentiado
  const { userId, sessionClaims } = await auth();
  const url = new URL(req.url);
  //determina o role do usuario
  const role = 
    userId && sessionClaims?.metadata.role 
      ? sessionClaims.metadata.role//usa o role definido no inicio da sessao
      : userId
      ? "patient" //se autenticado mas sem role, assume patient
      : "sign-in";// senao autenticado assume sign-in
  
    const matchingRoute = matchers.find(({matcher}) => matcher(req));

    if(matchingRoute && !matchingRoute.allowedRoles.includes(role)){
      return NextResponse.redirect(new URL(`/${role}`, url.origin));
    }

    return NextResponse.next();

});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};