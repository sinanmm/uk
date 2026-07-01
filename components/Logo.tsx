import Image from "next/image";

export default function Logo({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <span className="inline-flex items-center overflow-hidden">
      <Image
        src="/logo.jpg"
        alt="Pure Startup Academy"
        width={400}
        height={160}
        priority
        sizes="320px"
        className={`${className} object-contain`}
      />
    </span>
  );
}
