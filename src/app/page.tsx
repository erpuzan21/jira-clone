import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <div className="flex gap-4 p-4 bg-amber-200">
        <input />
        <Button>Primary</Button>

        <Button variant="outline">
          Delete
        </Button>

        <Button className="bg-green-500 hover:bg-green-600">
          Save
        </Button>

        <Button size="lg">
          Large Button
        </Button>

        <Button className="bg-red-500 hover:bg-green-600">
          exit
        </Button>

      </div>

      <div className="flex gap-4 p-5 bg-black">
        <Button variant="secondary">
          PUZAN
        </Button>
      </div>
    </div>
  );
}