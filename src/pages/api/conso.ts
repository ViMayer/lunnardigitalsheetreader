import { getInfo } from "./connection";
import { query as q } from "faunadb";
import { fauna } from "../../services/fauna";
import { sheetName } from "./connection";

export default async function getConso(req: any) {
  try {
    const info = await fauna.query(
      q.Get(q.Match(q.Index("user_by_consorciado"), req))
    );
    return info;
  } catch (e) {
    return;
  }
}
