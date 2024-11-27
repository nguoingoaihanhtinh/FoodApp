import foodRoute from "./foodRoutes.js";
import foodTypeRoute from "./foodTypeRoute.js";



export default function routes(server) {
  server.use("/api", foodRoute);
  server.use("/api", foodTypeRoute);
}
