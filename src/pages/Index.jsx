import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dog, Heart, Info } from "lucide-react";

const popularBreeds = [
  { name: "Labrador Retriever", description: "Friendly and outgoing" },
  { name: "German Shepherd", description: "Intelligent and versatile" },
  { name: "Golden Retriever", description: "Loyal and gentle" },
  { name: "French Bulldog", description: "Adaptable and playful" },
  { name: "Bulldog", description: "Calm and courageous" },
];

const Index = () => {
  const [likedBreeds, setLikedBreeds] = useState(new Set());

  const toggleLike = (breed) => {
    setLikedBreeds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(breed)) {
        newSet.delete(breed);
      } else {
        newSet.add(breed);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4">
        <header className="py-16 text-center">
          <h1 className="text-6xl font-bold mb-4 text-blue-800">Paw-some Pals</h1>
          <p className="text-xl text-gray-600 mb-8">Discover the wonderful world of dogs</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Explore Breeds <Dog className="ml-2 h-5 w-5" />
          </Button>
        </header>

        <Tabs defaultValue="about" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="about">About Dogs</TabsTrigger>
            <TabsTrigger value="breeds">Popular Breeds</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>Man's Best Friend</CardTitle>
                <CardDescription>The incredible bond between humans and dogs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-700">
                  Dogs have been our loyal companions for thousands of years. Known for their 
                  unwavering loyalty, affection, and diverse abilities, dogs have become an 
                  integral part of human society. From working roles to emotional support, 
                  these incredible animals continue to enrich our lives in countless ways.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1534361960057-19889db9621e" 
                  alt="Happy dog with owner" 
                  className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularBreeds.map((breed) => (
                <Card key={breed.name} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex justify-between items-center">
                      {breed.name}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleLike(breed.name)}
                      >
                        <Heart
                          className={`h-5 w-5 ${
                            likedBreeds.has(breed.name) ? "fill-red-500 text-red-500" : "text-gray-500"
                          }`}
                        />
                      </Button>
                    </CardTitle>
                    <CardDescription>{breed.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img 
                      src={`https://source.unsplash.com/featured/?${breed.name.replace(" ", ",")},dog`}
                      alt={breed.name}
                      className="mx-auto object-cover w-full h-48 rounded"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <footer className="text-center py-8 text-gray-600">
          <p>© 2023 Paw-some Pals. All rights reserved.</p>
          <Button variant="link" className="mt-2">
            <Info className="mr-2 h-4 w-4" /> Learn more about responsible pet ownership
          </Button>
        </footer>
      </div>
    </div>
  );
};

export default Index;
