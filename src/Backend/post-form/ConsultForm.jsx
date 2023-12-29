import React from "react";
import { useForm } from "react-hook-form";

import  Input from "../components/Input";

import appwriteService from "../Appwrite/config";
import { useNavigate } from "react-router-dom";


export default function ConsultForm({ post }) {
    

    const navigate = useNavigate();
   

    const submit = async (data) => {
        
                const dbPost = await appwriteService.createConsultForm({ ...data});
               

                if (dbPost) {
                    navigate(`/`)
                }
            }
     
   
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            fullName: post?.fullName || "",
            contactno: post?.contactno || "",
            problem: post?.problem || "",
            slug: post?.$id || "",
            status: post?.status || "active",


           
        },
    });

    function generateCode() {
        
        const first4Letters = "JHP-"
      
        // Generate 4 random numbers between 1 and 9
        var randomNumbers = "";
        for (let i = 0; i < 5; i++) {
          randomNumbers += Math.floor(Math.random() * 9) + 1;
        }
      
        // Combine the letters and numbers to create the code
        var code = first4Letters + randomNumbers;
      
        return code;
      }
      
    
      
   
    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-col flex-wrap justify-center text-center m-20 ">
            <div className="w-2/3 px-1 mx-auto">
                <Input
                    label="Full Name :"
                    placeholder="Full Name"
                    className="mb-4"
                    {...register("fullName", { required: true })}
                />
                <Input
                    label="Contact No. :"
                    placeholder="9876543211 with Whatsapp"
                    type="number"
                    className="mb-4"
                    {...register("contactno", { required: true })}
                />
               
                
               
            <Input
                    label="Describe your Problem"
                    placeholder="Describe your Problem in brief"
                    className="mb-4"
                    {...register("problem", { required: true })}
                />

                <Input
                   label={"Copy this code and wait for Whatsapp respone"}
                   className="mb-4 "
                   {...register("slug", { required: true })}
                   value={generateCode()}
                   placeholder={"type here to get ID"}
               />
            </div>
            <div className="w-1/3 px-2 mx-auto">
                
                
                <button type="submit" className="w-full py-2 mt-5 bg-blue-400 rounded-full">
                    {post ? "Update" : "Submit"}
                </button>
            </div>
        </form>
    )
                }