import Image from "next/image";

type PatientAvatarProps = {
  src: string;
  name: string;
};

export default function PatientAvatar({ src, name }: PatientAvatarProps) {
  return (
    <Image
      src={src}
      alt={`Avatar bệnh nhân ${name}`}
      width={64}
      height={64}
      className="rounded-full object-cover"
      placeholder="blur"
      blurDataURL="/default.jpg"
    />
  );
}
