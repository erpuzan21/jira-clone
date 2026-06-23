import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex gap-4 p-4">
      <input /> 
      <Button>Primary</Button>

      <Button variant="default">
        Delete
      </Button>

      <Button className="bg-green-500 hover:bg-green-600">
        Save
      </Button>

      <Button size="lg">
        Large Button
      </Button>
      
    </div>
    
    
  );
}