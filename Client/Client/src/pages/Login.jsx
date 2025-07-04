import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"; // You missed this import
import { useToast } from "@/hooks/use-toast"; // useToast hook should be used, not destructured wrongly
import axios from "axios"; // Correct import, do NOT use require
// import { Axis3DIcon } — this was wrongly used as an axios call

const Login = () => {
  const { toast } = useToast(); // correctly use the toast hook
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const loginHandler = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/login",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast({
          title: "Login Successful",
          description: res.data.message,
        });
      } else {
        toast({
          title: "Login Failed",
          description: res.data.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-4">
      <Input
        type="email"
        placeholder="Email"
        className="w-64"
        name="email"
        value={user.email}
        onChange={changeHandler}
      />
      <Input
        type="password"
        placeholder="Password"
        className="w-64"
        name="password"
        value={user.password}
        onChange={changeHandler}
      />
      <Button onClick={loginHandler} className="w-64 bg-blue-600 text-white">
        Log in
      </Button>
    </div>
  );
};

export default Login;
