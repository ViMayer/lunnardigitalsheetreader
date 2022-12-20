import { defaultUrl } from "../services/url";

export default function Home(req: any, res: any) {
  return (
    <>
      <h1>HOME</h1>
      <a href={`${defaultUrl + "/dashboard"}`}>
        <h1>PAINEL DE CONTROLE</h1>
      </a>
    </>
  );
}
