import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [(e.target as HTMLTextAreaElement).name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then((result) => {
          console.log(result.text);
        })
        .catch((error) => {
          console.log(error.text);
        });

      toast.success("Email Sent Successfully!");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="px-32">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl justify-center py-16 flex flex-row">
        Contact
      </h1>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col justify-center  items-center"
      >
        <div className="flex flex-col md:flex-row gap-5 justify-center">
          <Textarea
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="my-5 w-80 md:w-48"
          />
          <Textarea
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="my-5 w-80"
          />
        </div>
        <Textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          required
          className="my-5 w-80 md:w-[675px] h-[200px]"
        />
        <Button type="submit" className="flex flex-row mt-4 mb-6">
          Submit
        </Button>
      </form>
      <div className="flex flex-row gap-3 py-2 justify-center">
        <a
          href="https://github.com/ayush3160"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/ayush-sharma-6b5803235/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://twitter.com/ayush3160"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={24} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
