import { useFormStatus } from "react-dom";
import { Loader2, SendHorizonal } from "lucide-react";
import React from "react";

export const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`
        bg-black text-white px-10 py-5 rounded-2xl font-bold 
        flex items-center justify-center gap-3 transition-all 
        w-full md:w-fit group 
        ${pending ? "opacity-70 cursor-not-allowed" : "hover:bg-[#3e4cff]"}
      `}
    >
      {pending ? (
        <>
          Sending...
          <Loader2 className="animate-spin" size={20} />
        </>
      ) : (
        <>
          Send Message
          <SendHorizonal
            size={20}
            className="group-hover:translate-x-1 transition-transform"
          />
        </>
      )}
    </button>
  );
};