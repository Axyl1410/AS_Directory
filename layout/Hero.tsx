import { GridBackground } from "@/components/GridBackground";

const Hero = () => {
  return (
    <div className="h-[531px] w-full">
      <GridBackground>
        <div className="container flex items-center justify-center px-4">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="w-fit rounded bg-[#FBE843] px-5 py-2.5 text-sm font-bold text-black sm:text-base">
              Pitch, Vote, and Grow
            </div>
            <div className="flex max-w-[970px] items-center justify-center text-balance bg-black px-5 py-4 text-lg font-black leading-normal text-white md:text-[44px] lg:h-[140px] 2xl:h-[160px] 2xl:text-[54px]">
              Pitch Your Blog, Connect with Entrepreneurs
            </div>
            <p className="text-white md:h-[30px] md:text-xl">
              Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
              Competitions
            </p>
            <div className="relative w-full max-w-[700px]">
              <input
                className="h-[40px] w-full rounded-full border-2 border-black px-5 py-2 pr-[50px] text-lg font-bold text-black placeholder-black outline-none md:h-[60px] md:border-[5px] md:pr-[70px] md:text-[24px] 2xl:h-[80px]"
                placeholder="Search..."
              />
              <button className="absolute right-0 top-1/2 flex h-[25px] w-[25px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black transition-colors hover:bg-black-100 md:h-[40px] md:w-[40px] 2xl:h-[50px] 2xl:w-[50px]">
                <svg
                  className="h-[13px] w-[12px] md:h-[17px] md:w-[18px] 2xl:h-[20px] 2xl:w-[21px]"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.269 16.9814C4.59322 16.9814 0.789062 13.1772 0.789062 8.50142C0.789062 3.82564 4.59322 0.0214844 9.269 0.0214844C13.9448 0.0214844 17.7489 3.82564 17.7489 8.50142C17.7489 13.1772 13.9448 16.9814 9.269 16.9814ZM9.269 2.35621C5.88082 2.35621 3.12379 5.11282 3.12379 8.50142C3.12379 11.89 5.88082 14.6466 9.269 14.6466C12.6572 14.6466 15.4142 11.8896 15.4142 8.50142C15.4142 5.11325 12.6572 2.35621 9.269 2.35621Z"
                    fill="white"
                  />
                  <path
                    d="M20.403 17.8987L17.2106 14.7063C17.1587 14.6544 17.1034 14.6089 17.0456 14.5684C16.5621 15.2088 15.9896 15.7788 15.3467 16.2589C15.388 16.3188 15.4349 16.3757 15.488 16.4289L18.6804 19.6213C19.1563 20.0972 19.9275 20.0972 20.403 19.6213C20.8785 19.1458 20.8785 18.3742 20.403 17.8987Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </GridBackground>
    </div>
  );
};

export default Hero;
