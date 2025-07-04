import React, { useState } from "react";
import Navbar from "./Navbar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";

const Home = () => {
  const [title, setTitle] = useState("Todo App");
  const [description, setDescription] = useState("Welcome to the Todo App");
  const { toast } = useToast();
  const handleAddTodo = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/v1/todo", { title, description }, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      toast({
        title: "Success",
        description: res.data.message,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error?.response?.data?.message || "Something went wrong",
        variant: "destructive",
      });
    }
  };
  return (
      <>
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 mt-10">
          <div className="flex items-center gap-4">
            <div className="w-1/2 max-w-md">
              <Input
                type="text"
                placeholder="Add your todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)
                }
              />
            </div>

            <Button onClick={handleAddTodo} className="bg-green-500 text-white hover:bg-green-600">
              Add Todo 😲
            </Button>

          </div>
          <Textarea placeholder="Write your description here "
            value={description}
            onChange={(e) => setDescription(e.target.value)
            }
            className="w-1/2 " />
        </main>
      </>
    );
  }

  export default Home;