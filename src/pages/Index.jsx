import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const popularBreeds = [
  "Labrador Retriever",
  "German Shepherd",
  "Golden Retriever",
  "French Bulldog",
  "Bulldog",
];

const Index = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center">All About Dogs</h1>
      
      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Man's Best Friend</CardTitle>
            <CardDescription>Discover the world of dogs</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Dogs have been domesticated for thousands of years and are known for their loyalty, 
              companionship, and diverse breeds. They come in various sizes, shapes, and temperaments, 
              making them suitable for different lifestyles and purposes.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a" 
              alt="Cute dog" 
              className="mx-auto object-cover w-full h-[300px] rounded-lg"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Dog Breeds</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6">
              {popularBreeds.map((breed, index) => (
                <li key={index} className="mb-2">{breed}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
