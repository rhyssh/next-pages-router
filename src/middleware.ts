import { NextResponse, NextRequest } from "next/server";
import withAuth from "./middleware/withAuth";

export function mainMiddleware(req: NextRequest) {
  const res = NextResponse.next();

  return res;

  // const isLogin = true;
  // if (isLogin) {
  //   return NextResponse.next();
  // } else {
  //   return NextResponse.redirect(new URL("/auth/login", req.url));
  // }
}

export default withAuth(mainMiddleware, ["/profile","/admin"]);
// export const config = {
//   matcher: ["/product", "/about"],
// };
