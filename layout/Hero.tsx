"use client";
import { GridBackground } from "@/components/grid-background";
import SearchForm from "@/components/search-form";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

const Hero = ({ query }: { query?: string }) => {
  const media = useMediaQuery("(min-width: 768px)");
  return (
    <div className="h-[531px] w-full">
      <GridBackground>
        <div className="container flex items-center justify-center px-4">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <Image
              src="/Group.png"
              alt=""
              height={media ? 45 : 30}
              width={media ? 270 : 180}
            />
            <div className="flex max-w-[970px] items-center justify-center text-balance bg-black px-5 py-4 text-lg font-black uppercase leading-normal text-white sm:text-[35px] md:text-[40px] lg:h-[140px] 2xl:h-[160px] 2xl:text-[54px]">
              Pitch Your Blog, Connect with Entrepreneurs
            </div>
            <p className="text-white md:h-[30px] md:text-xl">
              Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
              Competitions
            </p>
            <SearchForm query={query} />
          </div>
        </div>
      </GridBackground>
    </div>
  );
};

export default Hero;
