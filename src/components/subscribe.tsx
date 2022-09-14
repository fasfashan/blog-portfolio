import { HiBriefcase } from "react-icons/hi";
export default function Subscribe() {
  return (
    <div className="border space-y-4 border-gray-200 p-4 col-span-12 rounded-md md:col-start-9 md:col-end-13 ">
      <div className="flex gap-4  items-center">
        <HiBriefcase />
        <p>Stay up to date</p>
      </div>
      <p className="text-sm text-slate-700">Get notified when I publish something new, and unsubscribe at any time.</p>
      <div className="flex flex-col gap-4 justify-between ">
        <input placeholder="Enter your email" className="border text-sm focus:ring-2 ring-black focus:outline-none border-gray-200 rounded-md py-2 px-4 " type="text" name="" id="" />
        <button className="py-2 px-4 bg-black hover:bg-opacity-70 text-white rounded-md">Join</button>
      </div>
    </div>
  );
}
