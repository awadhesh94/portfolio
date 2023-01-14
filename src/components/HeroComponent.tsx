import Image from "next/image";
import developerSvg from "public/image/developer.svg";

export const HeroComponent = () => {
  return (
    <section className="container grid lg:grid-cols-12 gap-12 px-8 mx-auto overflow-hidden">
      <div className="h-full grid lg:col-span-6 items-center">
        <div className="grid gap-4 text-brand-biege items-center">
          <div className="grid gap-3 col-12">
            <div className="font-brandHeading text-2xl">Hi, There I am</div>
            <div className="font-brandHeading text-5xl uppercase">
              Awadhesh Kumar
            </div>
            <div className="font-brandHeading text-brand-yellow text-8xl uppercase">
              I build things for the web.
            </div>
          </div>
          <p className="font-brandLight text-xl max-w-[50ch] mt-4">
            I am a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I am focused
            on building accessible, human-centered products at Optum.
          </p>
        </div>
      </div>
      <aside className="h-full grid lg:col-span-6 items-center">
        <figure>
          <Image src={developerSvg} alt="Awadhesh" className="object-contain" />
        </figure>
      </aside>
    </section>
  );
};
