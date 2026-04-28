import Image from "next/image";

interface FeatureSectionProps {
  title: string;
  description: string;
  cta: string;
  imageSrc: string;
  imageAlt: string;
  imageOnRight?: boolean;
}

export default function FeatureSection({
  title,
  description,
  cta,
  imageSrc,
  imageAlt,
  imageOnRight = true,
}: FeatureSectionProps) {
  const textBlock = (
    <div className="flex-1 max-w-sm">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
        {title}
      </h2>
      <p className="text-gray-500 text-sm leading-relaxed mb-6">{description}</p>
      <button
        className="px-5 py-2.5 rounded text-sm font-medium border flex items-center gap-2 hover:bg-blue-50 transition-colors"
        style={{ borderColor: "#4361EE", color: "#4361EE" }}
      >
        {cta} →
      </button>
    </div>
  );

  const imageBlock = (
    <div className="flex-1 flex justify-center">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full max-w-md object-contain"
      />
    </div>
  );

  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto flex items-center gap-16 flex-col md:flex-row">
        {imageOnRight ? (
          <>
            {textBlock}
            {imageBlock}
          </>
        ) : (
          <>
            {imageBlock}
            {textBlock}
          </>
        )}
      </div>
    </section>
  );
}
