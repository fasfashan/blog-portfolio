import { HiBriefcase } from "react-icons/hi";
import Button from "./button";
export default function Subscribe(className) {
  return (
    <div className="border shadow-md space-y-4 border-gray-200 p-4 col-span-12 rounded-md md:col-start-9 md:col-end-13 ">
      <div className="flex gap-2  items-center">
        <HiBriefcase />
        <p className="text-md">Stay up to date</p>
      </div>
      <p className="text-sm text-slate-700">Get notified when I publish something new, and unsubscribe at any time.</p>
      <div className="flex flex-col gap-4 justify-between ">
        <input placeholder="Enter your email" className="border shadow-inner text-sm focus:ring-2 ring-teal-100 focus:outline-none border-gray-200 rounded-md py-2 px-4 " type="text" name="" id="" />

        <Button href={`/`}>Join</Button>
      </div>
    </div>
  );
}
