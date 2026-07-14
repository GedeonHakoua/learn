
import Link from "next/link";

type Props = {}

export default function NotFound({}: Props) {
  return (
    <div className="flex flex-col center page">
        <h2>La page que vous avez demandée n'existe pas</h2>
        <Link href={"/"} className="btn-link">Retourner</Link>
    </div>
  )
}