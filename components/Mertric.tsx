import Image from "next/image";
import Link from "next/link";

interface Props {
  imgUrl: string;
  alt: string;
  value: number;
  title: string;
  href?: string;
  textStyles?: string;
  imgStyles?: string;
  isAuthor?: boolean;
}
const Metric = ({ imgUrl, alt, value, title, href, textStyles, imgStyles, isAuthor }: Props) => {
  const metricContent = (
    <>
      <Image src={imgUrl} width={16} height={16} alt={alt} className={`rounded-full object-contain ${imgStyles}`} />

      <p className={`${textStyles} flex items-center gap-1`}>{value}</p>
    </>
  );
  return href ? <Link href={href}>{metricContent}</Link> : <div>{metricContent}</div>;
};

export default Metric;
