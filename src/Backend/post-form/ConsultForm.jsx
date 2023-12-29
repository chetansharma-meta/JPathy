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
                   
                    className="mb-4 hidden"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
               
            <Input
                    label="Describe your Problem"
                    placeholder="Describe your Problem in brief"
                    className="mb-4"
                    {...register("problem", { required: true })}
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