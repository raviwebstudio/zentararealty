import { redirect } from "next/navigation";

export const metadata = {
  title: "Prime Residences Sector 65 Gurugram | Zentara Realty",
  description: "Boutique low-rise 2 & 3 BHK VRV homes in Sector 65, Gurugram by PRIME Developments.",
};

export default function PrimeResidencesPage() {
  redirect("/#prime-residences");
}
