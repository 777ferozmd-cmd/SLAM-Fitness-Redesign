import { redirect } from "next/navigation";

export default function TrainersRedirect() {
  redirect("/about#trainers");
}
