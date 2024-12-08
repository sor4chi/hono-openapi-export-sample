import { app } from "../app";
import fs from "fs/promises";

const openapi = await app.request("/doc");

await fs.mkdir("dist", { recursive: true });
await fs.writeFile("dist/openapi.json", await openapi.text());
