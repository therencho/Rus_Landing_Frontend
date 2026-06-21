import { NavbarDemo } from "@/components/navbar";
import { TextFlippingBoardDemo } from "@/components/hero";
import Footer from "@/components/footer";
import MeetingWorkspace from "@/components/input";
import Contact from "@/components/contact";

export default function Home() {

  return (

    <main
      className="
        min-h-screen
        bg-background
        text-fg
      "
    >

      <NavbarDemo />

      <div
        className="
          flex
          flex-col
          items-center
          justify-center
          pt-32
          px-6
        "
      >

        <TextFlippingBoardDemo />
        <MeetingWorkspace />
        <Contact />
        <Footer />

      </div>

    </main>
  );
}
