// src/pages/Navbar.jsx
import { Button } from "@/components/ui/button";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Todo App</h1>
        <div className="flex items-center gap-4">
          <p className="text-sm text-gray-600">Welcome to the Todo App</p>
          <Button className="bg-blue-500 text-white hover:bg-blue-600">
            Add Todo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
