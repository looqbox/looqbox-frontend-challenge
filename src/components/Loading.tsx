import bannerImg from '@/assets/banner.png';

export function Loading() {
  return (
    <div className="flex min-h-full w-full animate-pulse flex-col items-center justify-center">
      <img
        src={bannerImg}
        alt="Pikachu dancing next to pokeballs"
        className="w-[200px] "
      />
      <span className="text-2xl font-medium uppercase tracking-wide">
        Loading...
      </span>
    </div>
  );
}
