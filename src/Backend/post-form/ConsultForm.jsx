import React from "react";
import Select from "../components/Select";
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
            problemRelated: post?.problemRelated || "Skin Care",


           
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
            <div className="w-full px-1 mx-auto text-center">
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
                    min={5000000000}
                    max={9999999999}
                    className="mb-4"
                    {...register("contactno", { required: true })}
                />
                <div>
                <label className="text-left text-gray-700 ">Category</label>
                <Select
                    options={["Skin Care", "Hair Fall","Migraine","PCOS","Vitiligo","Kidney Stone","Other"]}
                    placeholder="Select Category"
                    label="Category"
                    className="mb-4 mt-2"
                    {...register("problemRelated", { required: true })}
                />
                </div>
                
               
            <Input
                    label="Describe your Problem"
                    placeholder="Describe your Problem in brief"
                    className="mb-4"
                    {...register("problem", { required: true })}
                />

                <Input
                   label={"Copy this code and wait for Whatsapp respone"}
                   className="mb-4 text-yellow-400"
                   {...register("slug", { required: true })}
                   value={generateCode()}
                   placeholder={"type here to get ID"}
               />
            </div>
            <div className="w-1/3 px-2 mx-auto">
                
                
                <button type="submit" className="px-10 py-2 mt-5 bg-blue-400 rounded-full">
                    {post ? "Update" : "Submit"}
                </button>
            </div>
        </form>
    )
                }