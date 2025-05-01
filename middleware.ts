/*configs do middleware usando clerk
  1-importa funções do clerk e rotas definidas
  2-cria matchers cada rota definida no arquivo rotas
  3-protegue rotas para que apenas usuários com determinados roles possam acessa-los
*/

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
//import { routeMatchers } from "./lib/routes";
import {  NextResponse } from "next/server";
import { routeAccess } from "./lib/routes";

const matchers = Object.keys(routeAccess).map((route) => ({
  matcher: createRouteMatcher([route]),
  allowedRoles: routeAccess[route],
}));

export default clerkMiddleware(async (auth,req)=> {
  const { userId, sessionClaims } = await auth();
  const url = new URL(req.url);
  
  const role = 
    userId && sessionClaims?.metadata.role 
      ? sessionClaims.metadata.role
      : userId
      ? "patient"
      : "sign-in";
  
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