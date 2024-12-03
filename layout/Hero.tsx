"use client";
import { GridBackground } from "@/components/GridBackground";
import SearchForm from "@/components/SearchForm";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

const Hero = ({ query }: { query?: string }) => {
  const media = useMediaQuery("(max-width: 768px)");
  return (
    <div className="h-[531px] w-full">
      <GridBackground>
        <div className="container flex items-center justify-center px-4">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            {media ? (
              <Image src="/Group.png" alt="" width={180} height={30} />
            ) : (
              <Image src="/Group.png" alt="" width={270} height={45} />
            )}
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
