import { Card } from "@repo/ui/card"

export default function Page(): JSX.Element {
  return (
    <main>
      <div className="flex gap-4">
        <Card className="flex-[2]">
          <h1 className="text-2xl">Início</h1>
        </Card>
        <Card>
          <h1 className="text-2xl">Início</h1>
        </Card>
      </div>
    </main>
  );
}
